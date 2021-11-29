const express = require("express");
const roleRouter = express.Router();

//destructuring
const { createRole } = require("../controllers/role");

//controllers
roleRouter.post("/createRole", createRole);

module.exports = roleRouter;
