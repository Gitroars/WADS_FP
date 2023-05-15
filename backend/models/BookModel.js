// This script is to query books in the database
const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  title: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
