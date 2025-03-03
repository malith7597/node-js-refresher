const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    maxLength: [100, "Title cannot be more than 100 characters"]
  },
  year: {
    type: Number,
    required: [true, "Year is required"],
    min: [1000, "Year cannot be less than 1000"],
    max: [new Date().getFullYear(), "Year cannot be in the future"]
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", BookSchema);
module.exports = Book;
