const express = require("express");
const validate = require("../middleware/validate");
const { createBookSchema } = require("../schema/book");
const router = express.Router();

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

module.exports = router;
