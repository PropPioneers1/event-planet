const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const ContactSchema = require("../schemas/ContactScheema");

const ContactModel = mongoose.model("Contact", ContactSchema);
router.post("/", async (req, res) => {
  const Contact = req.body;

  try {
    const result = await ContactModel.insertMany(Contact);
    res.status(201).json({ message: "Contact posted successfully", result });
  } catch (error) {
    console.error("Error posting Contact:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;