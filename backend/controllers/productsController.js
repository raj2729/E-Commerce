const asyncHandler = require("express-async-handler");
const Product = require("../models/ProductModel");

// asyncHandler to avoid writing custom middleware and using try-catch in our async await

// Gett all products
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  // throw new Error("Some Error");
  res.json(products);
});

// Get single Product
const getProduct = asyncHandler(async (req, res) => {
  // const product = products.find((p) => p._id === req.params.id);
  const product = await Product.findById(req.params.id);
  if (product) {
    res.status(200).json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = { getProduct, getProducts };
