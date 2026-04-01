// seedBooks.js
import db from "./db/db.js";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/10069132-L.jpg",
    notes: "Tiny habits, huge results.",
    date_read: "2023-09-01",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8108692-L.jpg",
    notes: "Focus is the ultimate superpower.",
    date_read: "2023-08-15",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8162831-L.jpg",
    notes: "Human history in one book.",
    date_read: "2023-07-20",
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8226191-L.jpg",
    notes: "Build, measure, learn.",
    date_read: "2023-09-10",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8235115-L.jpg",
    notes: "Two systems of thinking.",
    date_read: "2023-06-05",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen Covey",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8233781-L.jpg",
    notes: "Timeless productivity principles.",
    date_read: "2023-05-12",
  },
  {
    title: "Range",
    author: "David Epstein",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8261981-L.jpg",
    notes: "Specialization vs generalization.",
    date_read: "2023-04-18",
  },
  {
    title: "Grit",
    author: "Angela Duckworth",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8224970-L.jpg",
    notes: "Passion + perseverance.",
    date_read: "2023-03-22",
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8123421-L.jpg",
    notes: "Habit loops explained.",
    date_read: "2023-02-28",
  },
  {
    title: "Drive",
    author: "Daniel Pink",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8100911-L.jpg",
    notes: "Motivation in the modern world.",
    date_read: "2023-01-15",
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8233441-L.jpg",
    notes: "Less is more.",
    date_read: "2022-12-05",
  },
  {
    title: "Principles",
    author: "Ray Dalio",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8263021-L.jpg",
    notes: "Life and work principles.",
    date_read: "2022-11-10",
  },
  {
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8245621-L.jpg",
    notes: "Classic interpersonal skills.",
    date_read: "2022-10-01",
  },
  {
    title: "Mindset",
    author: "Carol Dweck",
    rating: 5,
    cover_url: "https://covers.openlibrary.org/b/id/8223402-L.jpg",
    notes: "Growth vs fixed mindset.",
    date_read: "2022-09-18",
  },
  {
    title: "Outliers",
    author: "Malcolm Gladwell",
    rating: 4,
    cover_url: "https://covers.openlibrary.org/b/id/8123482-L.jpg",
    notes: "Success is not just talent.",
    date_read: "2022-08-22",
  },
];

const seedBooks = async () => {
  try {
    for (const book of books) {
      await db.query(
        `INSERT INTO books (title, author, cover_url, rating, notes, date_read) 
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [book.title, book.author, book.cover_url, book.rating, book.notes, book.date_read]
      );
    }
    console.log("All books added successfully!");
    process.exit(0);
  } catch (err) {
    console.error("Error adding books:", err);
    process.exit(1);
  }
};

seedBooks();