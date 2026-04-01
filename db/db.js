import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "book-note",
  password: "1234Gab",
  port: 5432,
});

export default pool;