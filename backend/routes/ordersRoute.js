const express = require("express");
const { addOrderItem } = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Create new order
router.route("/").get(protect, addOrderItem);

module.exports = router;
