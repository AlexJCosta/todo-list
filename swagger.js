const conf = require('./core/config');

let paths = {};

// importing documentations
const userDoc = require('./resources/users/users.documentation');
for (let i = 0; i < userDoc.length; i++) {
	paths[userDoc[i].path] = userDoc[i].content;
}

const toDoDoc = require('./resources/toDo/toDo.documentation');
for (let i = 0; i < toDoDoc.length; i++) {
	paths[toDoDoc[i].path] = toDoDoc[i].content;
}

const toDoItemDoc = require('./resources/toDoItem/toDoItem.documentation');
for (let i = 0; i < toDoItemDoc.length; i++) {
	paths[toDoItemDoc[i].path] = toDoItemDoc[i].content;
}


module.exports = {
	"openapi": "3.0.0",
	"info": {
		"version": "1.0.0",
		"title": "To Do List: Documentation API",
		"description": "To Do List: Documentation API"
	},
	"components": {
		"securitySchemes": {
			"bearerAuth": {
				"type": "http",
				"scheme": "bearer",
				"bearerFormat": "JWT",
    			"name": "Authorization",
    			"description": "Enter your bearer token in the format **bearer &lt;token>**"
			}
		}
	},
	"servers": [
		{
			"url": conf.api_url
		}
	],
	"tags": [		
		{
			"name": "users",
			"description": "Users"
		},
		{
			"name": "toDos",
			"description": "To-Dos"
		},
		{
			"name": "toDoItems",
			"description": "To-Do-Items"
		}

	],
	"paths": paths
}