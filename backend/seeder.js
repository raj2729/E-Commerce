const mongoose = require("mongoose");
require("colors");
const dotenv = require("dotenv");
const users = require("./data/users");
const products = require("./data/products");
const User = require("./models/UserModel");
const Order = require("./models/OrderModel");
const Product = require("./models/ProductModel");
const connectDB = require("./config/config");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createUser = await User.insertMany(users);
    const adminUser = createUser[0]._id;
    const sampleData = products.map((product) => {
      return { ...product, User: adminUser };
    });
    await Product.insertMany(sampleData);
    console.log("Data imported".yellow);
    process.exit();
  } catch (error) {
    console.log("ERROR in importing data :" + error);
    process.exit(1);
  }
};

const dataDestroy = async () => {
  await Order.deleteMany();
  await User.deleteMany();
  await Product.deleteMany();
  console.log("Data Deleted Successfully".yellow);
  process.exit();
};

// argv => arguments passed
// node is 1st word
// backend/seeder.js is 2nd word
if (process.argv[2] === "-d") {
  dataDestroy();
} else importData();
