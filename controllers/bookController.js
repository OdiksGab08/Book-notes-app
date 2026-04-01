// bookController.js
import db from "../db/db.js";

// GET all books with search, sorting, pagination
export const getAllBooks = async (req, res) => {
  try {
    let orderBy = "created_at DESC";
    let values = [];
    let query = "SELECT * FROM books";

    // Search
    if (req.query.search) {
      query += " WHERE title ILIKE $1 OR author ILIKE $1";
      values.push(`%${req.query.search}%`);
    }

    // Sorting
    if (req.query.sort === "rating") orderBy = "rating DESC";
    if (req.query.sort === "title") orderBy = "title ASC";
    if (req.query.sort === "recent") orderBy = "date_read DESC";

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = 6;
    const offset = (page - 1) * limit;

    query += ` ORDER BY ${orderBy} LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(limit, offset);

    const result = await db.query(query, values);

    res.render("index.ejs", {
      books: result.rows,
      search: req.query.search || "",
      page,
    });
  } catch (err) {
    console.error(err);
    res.send("Error loading books");
  }
};

// GET add book form
export const getAddBookForm = (req, res) => {
  res.render("add.ejs");
};

// POST add new book
export const addBook = async (req, res) => {
  const { title, author, cover_url, rating, date_read, notes } = req.body;
  try {
    await db.query(
      "INSERT INTO books (title, author, cover_url, rating, date_read, notes) VALUES ($1,$2,$3,$4,$5,$6)",
      [title, author, cover_url, rating, date_read, notes]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send("Error adding book");
  }
};

// GET edit book form
export const getEditBookForm = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query("SELECT * FROM books WHERE id=$1", [id]);
    if (result.rows.length === 0) return res.send("Book not found");
    res.render("edit.ejs", { book: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.send("Error fetching book");
  }
};

// POST update book
export const editBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, cover_url, rating, date_read, notes } = req.body;
  try {
    await db.query(
      "UPDATE books SET title=$1, author=$2, cover_url=$3, rating=$4, date_read=$5, notes=$6 WHERE id=$7",
      [title, author, cover_url, rating, date_read, notes, id]
    );
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send("Error updating book");
  }
};

// POST delete book
export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM books WHERE id=$1", [id]);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.send("Error deleting book");
  }
};