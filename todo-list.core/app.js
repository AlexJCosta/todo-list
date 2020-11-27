const express = require('express');
const app = express();
const config = require('./config');

// Configuring express
app.use(express.json());

// Starting server
app.listen(config.port, () => console.log('Server runing in port: ' + config.port));