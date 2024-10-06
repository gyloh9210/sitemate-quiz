const express = require("express");
const validate = require("../middleware/validate");
const { createBookSchema, updateBookSchema } = require("../schema/book");
const router = express.Router();

const books = [
  {
    id: 1,
    title: "Lord of the Ring",
    description: "One of the best selling in 2020",
  },
  {
    id: 2,
    title: "Harry Potter",
    description: "Most recommended for teenages",
  },
  {
    id: 3,
    title: "Naruto",
    description: "One of the trending manga series now",
  },
];

router.post("/", validate(createBookSchema), async function (req, res) {
  const { title, description } = req.body;

  console.log("POST books/", {
    title,
    description,
  });

  return res.json({
    message: "Created successfully",
  });
});

router.get("/", async function (req, res) {
  return res.json(books);
});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);

  if (book) {
    return res.json(book);
  }

  return res.status(404).json({
    message: "Book not found",
  });
});

router.put("/:id", validate(updateBookSchema), async function (req, res) {
  const { title, description } = req.body;

  console.log("PUT books/", {
    title,
    description,
  });

  return res.json({
    message: "Updated successfully",
  });
});

router.delete("/:id", async function (req, res) {
  const { id } = req.params;
  const book = books.find((book) => book.id == id);

  if (book) {
    return res.json({
      message: "Deleted successfully",
    });
  }

  return res.status(404).json({
    message: "Book not found",
  });
});

module.exports = router;
