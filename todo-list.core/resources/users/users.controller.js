const User = require('../../sequelizeModels').User;
const validator = require('./users.validator');
const { v4: uuidv4 } = require('uuid');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { page, limit } = req.headers;    
    
    try {        
        result.user = await User.findAndCountAll({
            offset: page,
            limit: limit,
            distinct: true,            
        });

        // Paging        
        result.paging = { offset: page, limit: limit };

        statusCode = HttpStatus.OK;
        messages.push('Result success!');

        return res.status(statusCode).json({ result, messages });
    } catch (err) {        
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }

        return res.status(statusCode).json({ result: {}, messages });
    }
}

exports.findById = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let targetId = req.params.id;

    try {        
        const user = await User.findOne({
            where: { id: targetId }            
        });

        if (user) {
            result = user;
            messages.push('Result success!');
            statusCode = HttpStatus.OK;
        } else {
            result = {};
            messages.push('User not found');
            statusCode = HttpStatus.NOT_FOUND;
        }

        return res.status(statusCode).json({ result, messages });
    } catch (err) {        
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }

        return res.status(statusCode).json({ result: {}, messages });
    }
}

exports.findByEmail = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { email } = req.body;
    
    try {
        const user = await User.findOne({
            where: { email: email }            
        });

        if (user) {
            result = user;
            messages.push('Result success');
            statusCode = HttpStatus.OK;
        } else {
            result = {};
            messages.push('User not found');
            statusCode = HttpStatus.NOT_FOUND;
        }

        return res.status(statusCode).json({ result, messages });
    } catch (err) {
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }

        return res.status(statusCode).json({ result: {}, messages });
    }
}

exports.create = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { name, email, password } = req.body;    
    
    try {        
        const { isValidUser, errorsUser } = validator.create({ name, email, password });        
        if (isValidUser) {  
            try {                
                result = await User.create({ 
                    id: uuidv4(), 
                    name: name, 
                    email: email, 
                    password: password                    
                });
            } catch (err) {
                if (err.errors) {
                    statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
                    messages.push(err.errors[0].message);
                    err = err.errors;
                }
        
                return res.status(statusCode).json({ result: {}, messages });
            }

            messages.push('User created!');
            statusCode = HttpStatus.OK;           
        } else {            
            errorsUser.map(error => messages.push(error));
         
            result = {};
            statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
        }

        return res.status(statusCode).json({ result, messages });
    } catch (err) {        
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }

        return res.status(statusCode).json({ result: {}, messages });
    }
}

exports.update = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let targetId = req.params.id;
    let { name, email, password } = req.body;    
    
    try {
        const { isValidUser, errorsUser } = validator.update({ name, email, password });
        
        if (isValidUser) {                 
            console.log('ok',  name, email, password, targetId);
            const user = await User.findOne({ where: { id: targetId } });                                               
            
            if (user) {                
                if (user.name) user.name = name;
                if (user.password) user.password = password;                
                result = await user.save();            
                statusCode = HttpStatus.OK;         

                messages.push('User updated!');
            } else {
                result = {};
                statusCode = HttpStatus.NOT_FOUND;
                messages.push('User not found!');
            }
        } else {            
            errorsUser.map(error => messages.push(error));
         
            result = {};
            statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
        }

        return res.status(statusCode).json({ result, messages });
    } catch (err) {        
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }

        return res.status(statusCode).json({ result: {}, messages });
    }
}

exports.deleteById = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let targetId = req.params.id;    

    try {
        const user = await User.findOne({ where: { id: targetId } });                                               
        
        if (user) {          
            result.user = await User.destroy({ where: { id: targetId } });
            messages.push('User deleted!');
            statusCode = HttpStatus.OK;
        } else {
            result = {};
            messages.push('User not found!');
            statusCode = HttpStatus.NOT_FOUND;
        }

        return res.status(statusCode).json({ result, messages });
    } catch (err) {        
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }
        
        return res.status(statusCode).json({ result: {}, messages });
    }
}

exports.login = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { email, password } = req.body;

    try {        
        const { isValidUser, errorsUser } = validator.login({ email, password });
        
        if (isValidUser) {
            const currentUser = await User.findOne({ where: { email: email } });                                                       
            
            if (currentUser) {
                const passwordValidator = await bcrypt.compareSync( password, currentUser.password );
                
                let now = new Date().getTime();

                if (passwordValidator) {
                    const payload = {
                        user: currentUser,
                        admin: true,
                        master_admin: true,
                        iat: now,
                        exp: now + ( config.security.tokenLife * (1000 * 60 * 60) )
                    }                                
                    
                    messages.push('Success!');
                    result = payload;
                    statusCode = HttpStatus.OK;

                    return res.status(statusCode).json({
                        result, 
                        token: jwt.encode(payload, config.security.jwtPrivateKey), 
                        messages 
                    });
                } else {
                    result = {};
                    messages.push('Ops! Invalid user/password!');
                    statusCode = HttpStatus.UNAUTHORIZED;
                }            
            } else {
                result = {};
                messages.push('Ops! Invalid user/password!');
                statusCode = HttpStatus.NOT_FOUND;
            }
        } else {
            result = {};
            errorsUser.map(error => messages.push(error));
            statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
        }

        return res.status(statusCode).json({ result, messages });
    } catch (err) {        
        if (err.errors) {
            messages.push(err.errors[0].message);
            err = err.errors;
        }
        
        return res.status(statusCode).json({ result: {}, messages });
    }
}