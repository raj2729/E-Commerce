const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  var token;
  // console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_KEY);
      // console.log(decode);
      // decode has _id and creation time of the user whose this token is

      // OOOOOOOOOOOOOOOOOOOOOOOOOOOOHHHHHHHHHHHHHHHHHHHHH
      req.user = await User.findById(decode.id).select("-password");

      // next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
      // next();
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token found");
  }

  next();
});

const adminProtect = asyncHandler(async (req, res, next) => {
  var token;
  // console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decode = jwt.verify(token, process.env.JWT_KEY);
      // console.log(decode);
      // decode has _id and creation time of the user whose this token is

      // OOOOOOOOOOOOOOOOOOOOOOOOOOOOHHHHHHHHHHHHHHHHHHHHH
      const user = await User.findById(decode.id).select("-password");
      if (user.isAdmin === true) {
        req.user = user;
      } else {
        res.status(400).json({
          message: "User is not Admin",
        });
      }

      // next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
      // next();
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token found");
  }

  next();
});

module.exports = { protect, adminProtect };
