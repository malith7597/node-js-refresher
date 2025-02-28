const express = require("express");
const app = express();
const PORT = 3000;

const Books = [
  {
    id: 1,
    name: "book1"
  },
  {
    id: 2,
    name: "book2"
  },
  {
    id: 3,
    name: "book3"
  }
];

// get all books
app.get("/books", (req, res) => {
  res.json(Books);
});

// get book by id
app.get("/books/:id", (req, res) => {
  const book = Books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("Book not found");
  }
  res.json(book);
});

// create a new book
app.post("/books", (req, res) => {
  const book = {
    id: Books.length + 1,
    name: req.body.name
  };
  Books.push(book);
  res.json(book);
});

app.patch("/books/:id", (req, res) => {
  const book = Books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("Book not found");
  }
  book.name = req.body.name;
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const book = Books.find((book) => book.id === parseInt(req.params.id));
  if (!book) {
    res.status(404).send("Book not found");
  }
  const index = Books.indexOf(book);
  Books.splice(index, 1);
  res.json(book);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
