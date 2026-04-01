// routes/books.js
import express from "express";
import {
  getAllBooks,
  getAddBookForm,
  addBook,
  getEditBookForm,
  editBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

// Get all books with search, sorting, pagination
router.get("/", getAllBooks);

// Show Add Book form
router.get("/add", getAddBookForm);

// Add new book
router.post("/add", addBook);

// Show Edit Book form
router.get("/edit/:id", getEditBookForm);

// Update Book
router.post("/edit/:id", editBook);

// Delete Book
router.post("/delete/:id", deleteBook);

export default router;