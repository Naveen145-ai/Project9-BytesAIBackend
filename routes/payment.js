const express = require('express');
const router = express.Router();
const Profile = require('../models/UserProfile');
const Payment = require('../models/Payment');

// POST /api/payment
router.post('/', async (req, res) => {
  try {
    const { email, category } = req.body;

    const profile = await Profile.findOne({ email });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found." });
    }

    const salary = parseFloat(profile.salary);
    const maxTenPercent = salary * 0.10;
    const amount = Math.floor(Math.random() * maxTenPercent); // 👈 random number below 10%

    const payment = new Payment({
      email,
      amount,
      category,
      paidAt: new Date()
    });

    await payment.save();

    res.status(200).json(payment);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Payment failed." });
  }
});

module.exports = router;
