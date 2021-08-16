const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const products = require("./data/products");

const app = express();

dotenv.config();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to node server</h1>");
});

app.get("/products", cors(), (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} on port ${PORT}.`);
});
