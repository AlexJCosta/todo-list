const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.js');

// swagger router
router.use('/swagger', swaggerUi.serve);
router.get('/swagger', swaggerUi.setup(swaggerDocument));

// Users routes
const usersController = require('./resources/users/users.controller');

router.get('/users', usersController.getAll);
router.get('/users/:id', usersController.findById);
router.post('/users/email', usersController.findByEmail);
router.post('/users', usersController.create);
router.patch('/users/:id', usersController.update);
router.delete('/users/:id', usersController.deleteById);
router.get('/signin', usersController.login);
router.post('/users/send', usersController.sendEmails);

// ToDo routes
const toDosController = require('./resources/toDo/toDo.controller');

router.get('/toDos', toDosController.getAll);
router.get('/toDos/user/:userId', toDosController.getAllByUserId);
router.get('/toDos/:id', toDosController.findById);
router.get('/toDos/name/:name', toDosController.findByName);
router.post('/toDos', toDosController.create);
router.patch('/toDos/:id', toDosController.update);
router.delete('/toDos/:id', toDosController.deleteById);

// ToDoItem routes
const toDoitemsController = require('./resources/toDoItem/toDoItem.controller');

router.get('/toDoItems', toDoitemsController.getAll);
router.get('/toDoItems/:id', toDoitemsController.findById);
router.post('/toDoItems', toDoitemsController.create);
router.patch('/toDoItems/:id', toDoitemsController.update);
router.delete('/toDoItems/:id', toDoitemsController.deleteById);


module.exports = router;
