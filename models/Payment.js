const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  email: String,
  amount: Number,
  category: String,
  paidAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);
