const express = require("express");
const router = express.Router();
const UserProfile = require("../models/UserProfile");

// POST route to save user profile
router.post("/save", async (req, res) => {
    try {
        const { name,email,  salary, company, gpay, phonepe } = req.body;

        const newUser = new UserProfile({ name,email, salary, company, gpay, phonepe });
        await newUser.save();

        res.status(201).json({ message: "User profile saved successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Error saving profile", error: error.message });
    }
});

module.exports = router;
