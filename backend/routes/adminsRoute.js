const express = require("express");
const { getAllOrders } = require("../controllers/adminsController");

const { adminProtect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Get all orders
router.route("/adminViewOrders").get(adminProtect, getAllOrders);

module.exports = router;
