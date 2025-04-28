const { Sequelize } = require("sequelize");
const defineBookModel = require("./models/Book")

const sequelize = new Sequelize("pruebadb", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});


const db = {}
db.sequelize = sequelize;

db.books = defineBookModel(sequelize);

module.exports = db;
