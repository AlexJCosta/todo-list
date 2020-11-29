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
router.post('/users/login', usersController.login);

module.exports = router;
