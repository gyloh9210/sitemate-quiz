require("dotenv").config();
const express = require("express");
const bookController = require("./controllers/bookController");

const app = express();
const port = 3000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.use("/books", bookController);
app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
