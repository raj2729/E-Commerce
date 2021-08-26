const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/config");
const colors = require("colors");

const { errorHandler } = require("./middlewares/errorMiddleware");

const products = require("./data/products");

const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/usersRoute");
const orderRoute = require("./routes/ordersRoute");
const adminRoute = require("./routes/adminsRoute");

dotenv.config();

// Connecting to mongodb server
connectDB();

const app = express();
// Body Parser middleware, no need to install body-parser package
app.use(express.json());

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;

app.use(cors());

app.get("/", (req, res) => {
  res.send("<h1>Welcome to node server</h1>");
});

app.use("/api", productsRoute);
app.use("/api/users", userRoute);
app.use("/api/orders", orderRoute);

app.use("/api/admin/", adminRoute);

app.use("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running in ${NODE_ENV} on port ${PORT}.`.cyan);
});
