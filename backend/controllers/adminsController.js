const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");
const Order = require("../models/OrderModel");

// Get all orders to admin
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({});
    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(400);
      throw new Error("No Orders found");
    }
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = { getAllOrders };
