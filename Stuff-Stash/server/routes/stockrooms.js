const express = require("express");
const router = express.Router();
const { changeName } = require("../controllers/stockrooms"); //calls fuction from controllers folder

exports.changeName = changeName;
