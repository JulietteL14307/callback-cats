'use strict';

module.exports = (sequelize, DataTypes) => {
  var departments = sequelize.define(
    'departments',
    {
      department_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        model: "departments",
        key: "department_id"
      },
      title: DataTypes.STRING
    },
    {}
  );


  return departments;
};