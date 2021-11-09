'use strict';

module.exports = (sequelize, DataTypes) => {
  var products = sequelize.define(
    'products',
    {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
        model: "products",
        key: "product_id"
      },
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      department_id: {
          allowNull: false,
          type: DataTypes.INTEGER
      },
      inStock: DataTypes.BOOLEAN
    },
    {}
  );


  return products;
};