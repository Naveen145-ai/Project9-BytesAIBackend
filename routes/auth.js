const express = require("express");
const { registerUser } = require("../controller/authController.js");

const router = express.Router();

router.post("/register", registerUser);

module.exports = router;
