//IMPORT MODEL Book
const Book = require("../models/Book");

const getBooks = async (req, res) => {
    const getBooks = await Book.findAll();
    res.send(getBooks);
}

const getBook = async (req, res) => {
    const getBook = await Book.findOne({
        where: {
            id: req.params.id
        }
    });
    res.send(getBook);
}

const createBook = async (req, res) => {
    const createdBook = await Book.create({
        title: "Don Quijote",
        description: "Literatura clásica universal",
        length: 450
    });
    res.status(200).send(`Book created with id: ${createdBook.id}...`);
}

const deleteBook = async (req, res) => {
    const idToDelete = req.params.id;
    await Book.destroy({
        where: {
            id: idToDelete
        }
    });
    res.status(200).send(`Book deleted with id: ${idToDelete}...`);
}

const updateBook = async (req, res) => {
    const idToUpdate = req.params.id;
    await Book.update(
        {title: "Don Quijote", description: "Classic book"},
        {
        where: {
            id: idToUpdate
        }
    });
    res.status(200).send(`Book updated with id: ${idToUpdate}...`);
}

exports.getBooks = getBooks; 
exports.getBook = getBook; 
exports.createBook = createBook; 
exports.deleteBook = deleteBook;
exports.updateBook = updateBook;