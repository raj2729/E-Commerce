const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // mongodb
    const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@e-commerce.mdsy1.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;
    mongoose
      .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      })
      .then(() => {
        console.log("Database Successfully Connected");
      });
  } catch (error) {
    console.log("Error connecting to Database");
    process.exit(1);
  }
};

module.exports = connectDB;
