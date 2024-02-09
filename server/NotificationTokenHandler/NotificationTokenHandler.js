// routes/tokenRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const NotificationTokenSchema = require('../schemas/NotificationTokenScheema');

const NotificationTokenModel = mongoose.model('NotificationToken', NotificationTokenSchema);

// Get all the tokens
router.get("/", async (req, res) => {
  // Implement your logic here
});

// Post a token
router.post("/", async (req, res) => {
    const { token } = req.body;

    try {
      const newToken = await NotificationTokenModel.insertMany({ token });
      res.status(201).json({ message: "Token posted successfully", newToken });
    } catch (error) {
      console.error("Error posting token:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
