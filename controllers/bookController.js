const bookModel = require('../models/bookModel');
const validateBook = require('../middlewares/validateBook');

const createBook = (req, res) => {
    const newBook = req.body;

    if (!validateBook(newBook)) {
        return res.status(400).json({ error: 'Invalid book data' });
    }

    bookModel.addBook(newBook);
    res.status(201).json(newBook);
};

const getAllBooks = (req, res) => {
    res.json(bookModel.getAllBooks());
};

const getBookById = (req, res) => {
    const bookId = req.params.id;
    const book = bookModel.getBookById(bookId);

    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    res.json(book);
};

const updateBook = (req, res) => {
    const bookId = req.params.id;
    const updatedData = req.body;

    const book = bookModel.getBookById(bookId);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    if (!validateBook({ ...book, ...updatedData })) {
        return res.status(400).json({ error: 'Invalid book data' });
    }

    bookModel.updateBook(bookId, updatedData);
    res.json({ ...book, ...updatedData });
};

const deleteBook = (req, res) => {
    const bookId = req.params.id;

    const book = bookModel.getBookById(bookId);
    if (!book) {
        return res.status(404).json({ error: 'Book not found' });
    }

    bookModel.deleteBook(bookId);
    res.json({ message: 'Book deleted successfully' });
};

module.exports = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook,
};
