const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  googleIdn: { type: String, required: true },
  image: { type: String },
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: [{ type: String, required: true }],
  description: { type: String },
  link: { type: String },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
