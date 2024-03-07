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
router.put("/", async (req, res) => {
  const { token } = req.body;

  try {
      
      const existingToken = await NotificationTokenModel.findOneAndUpdate(
        
          { token }, 
          { new: true, upsert: true } 
      );
      
      res.status(200).json({ message: "Token updated successfully", existingToken });
  } catch (error) {
      console.error("Error updating token:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});


module.exports = router;
