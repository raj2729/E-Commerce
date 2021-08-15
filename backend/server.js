const express = require("express");
const products = require("./data/products");
const cors = require("cors");

const app = express();
// app.use(allowCrossDomain);
// app.use(cors());
app.use(cors());

// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);

//   next();
// });

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

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
