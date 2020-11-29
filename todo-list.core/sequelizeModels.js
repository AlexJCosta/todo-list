const Sequelize = require('sequelize');
const dbConfig = require('./config');
var db = {};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
	host: dbConfig.host,
	dialect: dbConfig.dialect,
	logging: false
});