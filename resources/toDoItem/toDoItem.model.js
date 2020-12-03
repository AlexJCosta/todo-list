module.exports = (sequelize, DataTypes) => {
	var ToDoItem = sequelize.define('ToDoItem', {
		id: { type: DataTypes.UUID, primaryKey: true },		
		name: { type: DataTypes.STRING(100), allowNull: false, notEmpty: true }		
	}, { paranoid: true });
  
	return ToDoItem;
};