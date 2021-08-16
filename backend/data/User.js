const bcrypt = require("bcryptjs");

const Users = [
  {
    name: "admin",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("adminpassword", 15),
    isAdmin: true,
  },
  {
    name: "raj",
    email: "raj@gmail.com",
    password: bcrypt.hashSync("rajpassword", 15),
  },
  {
    name: "preet",
    email: "preet@gmail.com",
    password: bcrypt.hashSync("preetpassword", 15),
  },
];

module.exports = Users;
