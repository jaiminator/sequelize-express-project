const { Sequelize } = require("sequelize"); //IMPORT SEQUELIZE

//CREATE NEW CONNECTION WITH SEQUELIZE
const sequelize = new Sequelize("pruebadb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
})

//CREATE OBJECT db
const db = {};
db.sequelize = sequelize;

module.exports = db;  //EXPORT OBJECT db
