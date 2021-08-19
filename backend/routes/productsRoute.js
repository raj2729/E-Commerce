const express = require("express");
const {
  getProducts,
  getProduct,
} = require("../controllers/productsController");

const router = express.Router();

// Gett all products
// router.get("/products", getProducts)
router.route("/products").get(getProducts);

// Get single Product
router.route("/products/:id").get(getProduct);

module.exports = router;
