const User = require('../../sequelizeModels').User;
const ToDo = require('../../sequelizeModels').ToDo;
const ToDoItem = require('../../sequelizeModels').ToDoItem;
const validator = require('./toDoItem.validator');
const { v4: uuidv4 } = require('uuid');
const HttpStatus = require('http-status-codes');

exports.getAll = async (req, res) => {    
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let { page, limit } = req.headers;    
    
    try {         
        result.toDoItem = await ToDoItem.findAll({
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
        const todo = await ToDoItem.findOne({
            where: { id: targetId }            
        });

        if (todo) {
            result = todo;
            messages.push('Result success!');
            statusCode = HttpStatus.OK;
        } else {
            result = {};
            messages.push('ToDoItem not found');
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
    let { name, toDoItemUserId, toDoId } = req.body;    
    
    try {       
        const { isValid, errors } = validator.create({ name, toDoItemUserId, toDoId });        

        if (isValid) {  
            const todo = await ToDo.findOne({ where: { id: toDoId } });      
            
            if (todo) {
                const user = await User.findOne({ where: { id: toDoItemUserId } });      
                console.log(user);
                if (user) {
                    try {                
                        result = await ToDoItem.create({ 
                            id: uuidv4(), 
                            name: name,
                            toDoItemUserId: toDoItemUserId,
                            toDoId: toDoId               
                        });
                        
                        messages.push('ToDoItem created!');
                        statusCode = HttpStatus.OK;              
                    } catch (err) {
                        if (err.errors) {
                            statusCode = HttpStatus.UNPROCESSABLE_ENTITY;
                            messages.push(err.errors[0].message);
                            err = err.errors;
                        }
                
                        return res.status(statusCode).json({ result: {}, messages });
                    }
                }else{
                    messages.push('User not found!');
                    statusCode = HttpStatus.NOT_FOUND;                  
                }
            }else{
                messages.push('ToDo not found!');
                statusCode = HttpStatus.NOT_FOUND;              
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

exports.update = async (req, res) => {
    let result = {};
    let messages = [];
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
    let targetId = req.params.id;
    let { name, toDoItemUserId, toDoId } = req.body;    
    
    try {
        const { isValid, errors } = validator.update({ name, toDoItemUserId, toDoId });
        
        if (isValid) {                             
            const todo = await ToDo.findOne({ where: { id: toDoId } });                                               
            
            if (todo) {                
                const user = await User.findOne({ where: { id: toDoItemUserId } });                                               
                if (user) {                
                    const toDoItem = await ToDoItem.findOne({ where: { id: targetId } });                                               

                    if (toDoItem) {
                        if (toDoItem.name) toDoItem.name = name;
                        if (toDoItem.toDoItemUserId) toDoItem.toDoItemUserId = toDoItemUserId;
                        if (toDoItem.toDoId) toDoItem.toDoId = toDoId;
                        
                        result = await toDoItem.save();            
                        statusCode = HttpStatus.OK;         

                        messages.push('ToDoItem updated!');
                    }else{
                        result = {};
                        statusCode = HttpStatus.NOT_FOUND;
                        messages.push('ToDoItem not found!');        
                    }
                }else{
                    result = {};
                    statusCode = HttpStatus.NOT_FOUND;
                    messages.push('User not found!');    
                }
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
        const toDoItem = await ToDoItem.findOne({ where: { id: targetId } });                                               
        
        if (toDoItem) {          
            result.toDoItem = await ToDo.destroy({ where: { id: targetId } });
            messages.push('ToDoItem deleted!');
            statusCode = HttpStatus.OK;
        } else {
            result = {};
            messages.push('ToDoItem not found!');
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