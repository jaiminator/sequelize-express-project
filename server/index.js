const port = 8000; //DECLARE PORT

const cors = require("cors"); //IMPORT CORS
const express = require("express"); //IMPORT EXPRESS
const db = require("./db"); //IMPORT DB
const booksRouter = require("./routes/books.routes"); //IMPORT ROUTES

//INITIALIZE EXPRESS
const main = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  db.sequelize.sync().then(() => {
    console.log("Re-sync db.");
  });

  app.use("/books", booksRouter);

  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
};

main();
