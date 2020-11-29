const express = require('express');
const app = express();
const db = require('./sequelizeModels');
const config = require('./config');


db.sequelize
	.authenticate()
	.then(async () => {			
		await db.sequelize.sync();
						
		// Configuring Express
		app.use(express.json());						

		// Starting server
		app.listen(config.port, () => console.log('Server runing in port: ' + config.port));
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});