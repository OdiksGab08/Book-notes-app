import express from "express";
import bodyParser from "body-parser";
import booksRouter from "./routes/books.js";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// ✅ Use routes
app.use("/", booksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});