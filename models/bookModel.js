const fs = require('fs');
const path = require('path');

let books = [];

const loadBooks = () => {
    const dataPath = path.join(__dirname, '../data.json');
    const jsonData = fs.readFileSync(dataPath);
    books = JSON.parse(jsonData);
};

loadBooks();

const getAllBooks = () => books;

const getBookById = (bookId) => books.find(b => b.book_id === bookId);

const addBook = (book) => {
    books.push(book);
};

const updateBook = (bookId, updatedData) => {
    const bookIndex = books.findIndex(b => b.book_id === bookId);
    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...updatedData };
    }
};

const deleteBook = (bookId) => {
    const bookIndex = books.findIndex(b => b.book_id === bookId);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
};