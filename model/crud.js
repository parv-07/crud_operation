const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize("jain", "root", "root", {
  host: "localhost",
  logging: false,
  dialect:
    "mysql" /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */,
});
const f = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    // const User = sequelize.define("Ben", {
    //   // Model attributes are defined here
    //   firstName: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //   },
    //   lastName: {
    //     type: DataTypes.STRING,
    //     // allowNull defaults to true
    //   },
    // });
    // await User.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
f();
const parv = {};
parv.Sequelize = Sequelize;
parv.sequelize = sequelize;

parv.createtable = require("./createtable")(sequelize, DataTypes);
parv.createtable2 = require("./createtable2")(sequelize, DataTypes, Model);
parv.sequelize.sync({
  force: false,
});
module.exports = parv;
