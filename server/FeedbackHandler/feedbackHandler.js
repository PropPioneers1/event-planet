const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const FeedBackSchema = require('../schemas/FeedBackSchema');
const feedBackModal = mongoose.model("feedback",FeedBackSchema);


// post route
router.post("/", async (req, res) => {
  try {
    const newShopItem = new feedBackModal(req.body);
    await newShopItem.save();
    res.status(200).json({
      message: "Feedback successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});

  module.exports = router;
  
