module.exports = (sequelize, DataTypes) => {
	var Todo = sequelize.define('ToDo', {
		id: { type: DataTypes.UUID, primaryKey: true },		
		name: { type: DataTypes.STRING(100), allowNull: false, notEmpty: true }		
	}, { paranoid: true });
  
	return Todo;
};