const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const colors = require("colors");

const products = require("./data/products");

const productsRoute = require("./routes/productsRoute");

dotenv.config();

// Connecting to mongodb server
connectDB();

const app = express();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to node server</h1>");
});

app.use("/api", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} on port ${PORT}.`.cyan);
});
