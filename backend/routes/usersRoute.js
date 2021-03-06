const express = require("express");

const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");

const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// Post user auth
router.route("/login").post(authController);

// get user details - Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

// Register new user
router.route("/").post(registerUser);

module.exports = router;
