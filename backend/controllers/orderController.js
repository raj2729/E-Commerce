const asyncHandler = require("express-async-handler");
const { createStore } = require("redux");
const Order = require("../models/OrderModel");
const mongoose = require("mongoose");

const addOrderItem = asyncHandler(async (req, res) => {
  // try {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error("Please add products");
    return;
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createOrder = await order.save();

    res.status(201).json(createOrder);
  }
  // } catch (error) {
  //   console.log(error);
  // }
});

// Get order by Id
const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// paid endpoint
const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    (order.isPaid = true),
      (order.paidAt = new Date()),
      (order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      });
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// Get all user orders
const getMyOrders = asyncHandler(async (req, res) => {
  try {
    // Get all user order takes req.user._id
    /*
_id not cast to ObjectId error coming 
When this route moved on top of all routes in router
the error gets solved
*/
    const orders = await Order.find({
      // user: mongoose.Types.ObjectId(req.user._id),
      // Or normal also works
      user: req.user._id,
    });
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
});

module.exports = { addOrderItem, getOrderById, updateOrderToPaid, getMyOrders };
