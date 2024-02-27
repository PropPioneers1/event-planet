const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const EventTaskSchema = require("../schemas/EventTaskSchema/EventTaskSchema");

const eventModel = mongoose.model("EventTask",EventTaskSchema);

// Posting board data 
router.post("/", async (req, res) => {
    const board = req.body;
    console.log(board);
    try {
      const result = await eventModel.insertOne(board);
      res.status(201).json({ message: "Board posted successfully", result });
    } catch (error) {
      console.error("Error posting board:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });



module.exports = router;
