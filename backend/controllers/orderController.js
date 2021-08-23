const asyncHandler = require("express-async-handler");
const { createStore } = require("redux");
const Order = require("../models/OrderModel");

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

module.exports = { addOrderItem };
