const express = require("express");
const {
  addOrderItem,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
} = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Get all user order takes req.user._id
/*
_id not cast to ObjectId error coming 
When this route moved on top of all routes in router
the error gets solved
*/

// Get all user orders
router.route("/myorders").get(protect, getMyOrders);

// Create new order
router.route("/").post(protect, addOrderItem);

// Get order by Id
router.route("/:id").get(protect, getOrderById);

// Update order by Id
router.route("/:id/pay").put(protect, updateOrderToPaid);

module.exports = router;
