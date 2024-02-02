const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const SelecteTHSchema = require("../schemas/SelectedthScheema");

const SelectedTHeme = new mongoose.model("SelectedTHeme", SelecteTHSchema);

router.post("/", async (req, res) => {
  const newSelectedTheme = new SelectedTHeme(req.body);
  try {
    await newSelectedTheme.save();
    res.status(201).json({ message: "Theme selected successfully" });
  } catch (error) {
    console.error("Error saving selected theme:", error);
    res.status(500).json({ error: "Internal Server theme Error" });
  }
});

module.exports = router;
