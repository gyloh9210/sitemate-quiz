require("dotenv").config();
const express = require("express");
const cors = require('cors');
const bookController = require("./controllers/bookController");

const app = express();
const port = 8080;

app.use(cors())
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/books", bookController);

app.listen(port, () => {});

module.exports = app;