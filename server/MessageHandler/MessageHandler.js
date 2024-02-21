// routes/tokenRoutes.js
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const MessageSchema = require('../schemas/MessageSchema/MessageSchema');

const MessageModel = mongoose.model('Message', MessageSchema);

// Get all the tokens
router.get("/", async (req, res) => {
  try {
    const result = await MessageModel.find({});
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});

// Post a token
router.post("/", async (req, res) => {
    const notification  = req.body;
    console.log(notification);
    try {
      const newMessage = await MessageModel.insertMany(notification );
      
      res.status(201).json({ message: "Message posted successfully", newMessage });
    } catch (error) {
      console.error("Error posting token:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
