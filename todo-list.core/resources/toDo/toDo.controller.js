const ToDo = require('../../sequelizeModels').ToDo;
const validator = require('./toDo.validator');
const { v4: uuidv4 } = require('uuid');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {    
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { page, limit } = req.headers;    
    
    try {         
        result.todo = await ToDo.findAll({
            offset: page,
            limit: limit,
            distinct: true 
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
        const todo = await ToDo.findOne({
            where: { id: targetId }            
        });

        if (todo) {
            result = todo;
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

exports.create = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { name, toDoUserId } = req.body;    
    
    try {        
        const { isValid, errors } = validator.create({ name });        
        if (isValid) {              
            try {                
                result = await ToDo.create({ 
                    id: uuidv4(), 
                    name: name,
                    toDoUserId: toDoUserId                
                });
                console.log('ok');
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
            errors.map(error => messages.push(error));
         
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
    let { name } = req.body;    
    
    try {
        const { isValid, errors } = validator.update({ name });
        
        if (isValid) {                             
            const todo = await ToDo.findOne({ where: { id: targetId } });                                               
            
            if (todo) {                
                if (todo.name) todo.name = name;

                result = await todo.save();            
                statusCode = HttpStatus.OK;         

                messages.push('ToDo updated!');
            } else {
                result = {};
                statusCode = HttpStatus.NOT_FOUND;
                messages.push('ToDo not found!');
            }
        } else {            
            errors.map(error => messages.push(error));
         
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
        const todo = await ToDo.findOne({ where: { id: targetId } });                                               
        
        if (todo) {          
            result.todo = await ToDo.destroy({ where: { id: targetId } });
            messages.push('ToDo deleted!');
            statusCode = HttpStatus.OK;
        } else {
            result = {};
            messages.push('ToDo not found!');
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