module.exports = function(sequelize, DataTypes) {
  return sequelize.define('departments', {
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'departments'
  });
};