const { DataTypes } = require("sequelize");
const { sequelize } = require("./crud");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      age: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
    }
  );
  return User;
};
