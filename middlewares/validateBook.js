const validateBook = (book) => {
    const { book_id, title, author, genre, year, copies } = book;
    if (!book_id || !title || !author || !genre || !year || !copies) {
      return false;
    }
    if (typeof book_id !== 'string' && typeof book_id !== 'number') return false;
    if (typeof title !== 'string' || typeof author !== 'string' || typeof genre !== 'string') return false;
    if (typeof year !== 'number' || typeof copies !== 'number') return false;
    return true;
  };
  
  module.exports = validateBook;