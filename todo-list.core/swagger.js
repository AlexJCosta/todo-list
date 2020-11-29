const conf = require('./config');

let paths = {};

// importing documentations
const userDoc = require('./resources/users/users.documentation');
for (let i = 0; i < userDoc.length; i++) {
	paths[userDoc[i].path] = userDoc[i].content;
}

module.exports = {
	"openapi": "3.0.0",
	"info": {
		"version": "1.0.0",
		"title": "To Do List: Documentation API",
		"description": "To Do List: Documentation API"
	},
	"components": {
		
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
		}		
	],
	"paths": paths
}