const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: String,
  email: String, // 👈 add this
  salary: Number,
  company: String,
  gpay: String,
  phonepe: String,
});

module.exports = mongoose.model("Profile", profileSchema);
