module.exports = (sequelize, DataTypes) => {
	var User = sequelize.define('Users', {
		id: { type: DataTypes.UUID, primaryKey: true },		
		name: { type: DataTypes.STRING(100), allowNull: false, notEmpty: true },
		email: { type: DataTypes.STRING(100), unique: true, isEmail: true, allowNull: false, notEmpty: true },		
		password: { type: DataTypes.STRING(100), allowNull: false, notEmpty: true },		
		statusUser: { type: DataTypes.ENUM('Active', 'Inactive'), allowNull: false },		
	}, { paranoid: true });
  
	return User;
};