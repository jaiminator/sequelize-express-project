const { Sequelize } = require("sequelize");

const connectDB = () => {
  const sequelize = new Sequelize("pruebadb", "root", "root", {
    host: "localhost",
    dialect: "mysql",
  });

  return sequelize
};

const db = {}

db.sequelize = connectDB();

module.exports = db;
