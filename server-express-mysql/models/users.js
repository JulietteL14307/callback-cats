'use strict';

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define(
    'users',
    {
      UserId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
        model: "users",
        key: "UserId"
      },
      Username: {
        type: DataTypes.STRING,
        unique: true
      },
      Password: DataTypes.STRING,
      Admin: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );

  return users;
};