const Sequelize = require('sequelize');
const dbConfig = require('./core/config');
var db = {};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
	host: dbConfig.host,
    dialect: dbConfig.dialect,
    database: dbConfig.database,
    username: dbConfig.username,
    password: dbConfig.password,
    port: 5432,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: true,
    operatorsAliases: false
});

// Mapping entities
db.User = require('./resources/users/users.model')(sequelize, Sequelize.DataTypes);
db.ToDo = require('./resources/toDo/toDo.model')(sequelize, Sequelize.DataTypes);
db.ToDoItem = require('./resources/toDoItem/toDoItem.model')(sequelize, Sequelize.DataTypes);

// Relationships
db.User.hasMany(db.ToDo, { as: 'userToDos', onDelete: 'cascade', onUpdate: 'restrict', foreignKey: { name: 'toDoUserId', type: Sequelize.DataTypes.UUID, allowNull: false } });
db.User.hasMany(db.ToDoItem, { as: 'userToDoItems', onDelete: 'cascade', onUpdate: 'restrict', foreignKey: { name: 'toDoItemUserId', type: Sequelize.DataTypes.UUID, allowNull: false } });

db.ToDo.hasMany(db.ToDoItem, { as: 'toDoItemsToDo', onDelete: 'cascade', onUpdate: 'restrict', foreignKey: { name: 'toDoId', type: Sequelize.DataTypes.UUID, allowNull: false } });
db.ToDo.belongsTo(db.User, { as: 'toDoUser', onDelete: 'cascade', onUpdate: 'restrict', foreignKey: { name: 'toDoUserId', type: Sequelize.DataTypes.UUID, allowNull: false } });

db.ToDoItem.belongsTo(db.User, { as: 'toDoItemUser', onDelete: 'cascade', onUpdate: 'restrict', foreignKey: { name: 'toDoItemUserId', type: Sequelize.DataTypes.UUID, allowNull: false } });
db.ToDoItem.belongsTo(db.ToDo, { as: 'toDoItemToDo', onDelete: 'cascade', onUpdate: 'restrict', foreignKey: { name: 'toDoId', type: Sequelize.DataTypes.UUID, allowNull: false } });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;