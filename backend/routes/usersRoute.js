const express = require("express");

const { authController } = require("../controllers/usersController");

const router = express.Router();

// Post user auth
router.route("/login").post(authController);

module.exports = router;
