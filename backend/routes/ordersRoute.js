const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Create new order
router.route("/").post(protect, addOrderItem);

// Get order by Id
router.route("/:id").get(protect, getOrderById);

// Update order by Id
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
