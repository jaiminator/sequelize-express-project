const port = 8000;

const cors = require("cors");
const express = require("express");

const Book = require("./models/Book")
const booksRouter = require("./routes/books.routes");

const main = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  Book.sync();

  app.use("/books", booksRouter);

  app.listen(port, () => {
    console.log(`App listening on ${port}`);
  });
};

main();
