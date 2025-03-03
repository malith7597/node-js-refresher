const BookDB = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const books = await BookDB.find();
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
  }
};

const getASingleBook = async (req, res) => {
  try {
    const book = await BookDB.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
  }
};

const createBook = async (req, res) => {
  try {
    const book = new BookDB({
      title: req.body.title,
      year: req.body.year
    });
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await BookDB.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book.title = req.body.title;
    book.year = req.body.year;
    const updatedBook = await book.save();
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
  }
};

const updateSingleBook = async (req, res) => {
  try {
    const book = await BookDB.findByIdAndUpdate;
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book.title = req.body.title;
    book.year = req.body.year;
    const updatedBook = await book.save();
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await BookDB.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    await book.remove();
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  getAllBooks,
  getASingleBook,
  createBook,
  updateBook,
  updateSingleBook,
  deleteBook
};
