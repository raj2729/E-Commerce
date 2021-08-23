const express = require("express");
const {
  addOrderItem,
  getOrderById,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Create new order
router.route("/").post(protect, addOrderItem);

// Get order by Id
router.route("/:id").get(protect, getOrderById);

module.exports = router;
