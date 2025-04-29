const express = require("express");
const booksController = require("../controllers/books.controllers")
const router = express.Router();

router.get("/", booksController.getBooks);
router.get("/:id", booksController.getBook);
router.post("/", booksController.createBook);
router.delete("/:id", booksController.deleteBook);
router.put("/:id", booksController.updateBook);

module.exports = router;