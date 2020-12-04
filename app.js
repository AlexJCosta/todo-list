const express = require('express');
const app = express();
const db = require('./sequelizeModels');
const config = require('./core/config');
const cors = require('cors');

db.sequelize
	.authenticate()
	.then(async () => {			
        await db.sequelize.sync();
        
        // Deleting data base
		//await db.sequelize.drop();
						
		// Configuring Express
		app.use(express.json());						
		app.use(cors());
		app.options('*', cors())

        // Importing routes
		const routes = require('./routes');
        app.use('/api', routes);
		
		var porta = process.env.PORT || 3000;
		// Starting server
		app.listen(config.port, () => console.log('Server runing in port: ' + porta));
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});