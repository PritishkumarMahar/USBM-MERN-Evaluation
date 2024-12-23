const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());

// Path to books.json
const booksFilePath = path.join(__dirname, "books.json");

// Function to read books from books.json
const getBooks = () => {
  const data = fs.readFileSync(booksFilePath, "utf-8");
  return JSON.parse(data);
};

// Function to write books to books.json
const saveBooks = (books) => {
  fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
};

// In-memory array (will sync with books.json on startup)
let books = getBooks();

// Route to add a book
app.post("/api/books", (req, res) => {
  const { title, author } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: "Title and author are required." });
  }

  const newBook = {
    id: books.length + 1,
    title,
    author,
  };

  books.push(newBook);
  saveBooks(books);

  res.status(201).json({ message: "Book added successfully", book: newBook });
});

// Route to get all books
app.get("/api/books", (req, res) => {
  res.json(books);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
