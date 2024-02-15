const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const FeedBackSchema = require('../schemas/FeedBackSchema');
const feedBackModal = mongoose.model("feedback",FeedBackSchema);


// post route
router.post("/", async (req, res) => {
    const feedback = req.body;
    try {
      const result = await feedBackModal.send(feedback);
      res.status(201).json({ message: "inserted successfully", result });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Server Error" });
    }
  });
  module.exports = router;
  
