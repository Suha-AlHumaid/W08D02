const express = require("express");
const userRouter = express.Router();

//destructuring
const { register } = require("../controllers/user");

//controllers
userRouter.post("/register", register);



module.exports = userRouter;
