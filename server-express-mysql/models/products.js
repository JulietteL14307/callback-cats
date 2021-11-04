'use strict';
module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define(
    'products',
    {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      department_id: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      inStock: {
        allowNull: false,  
        type: DataTypes.BOOLEAN
    },
    }
  );

  return products;
};