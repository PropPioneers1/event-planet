const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const LikeDislikeSchema = require('../schemas/LikeDislikeSchema');
const likeDislikeModal = mongoose.model("likeDislike",LikeDislikeSchema);
 
// router.patch('/:id/vote', async (req, res) => {
//     try {
//       const feedbackId = req.params.id;
//       const vote  = req.body; // 'yes' or 'no'
//       console.log(vote)
//       let updateField = {};
//       if (vote === 'yes') {
//         updateField = { $inc: { yesVotes: 1 } };
//       } else if (vote === 'no') {
//         updateField = { $inc: { noVotes: 1 } };
//       } else {
//         return res.status(400).json({ error: 'Invalid vote value' });
//       }
      
//       const updatedFeedback = await likeDislikeModal.findByIdAndUpdate(
//         feedbackId,
//         updateField,
//         { new: true }
//       );
  
//       res.status(200).json({ message: 'Vote updated successfully', feedback: updatedFeedback });
//     } catch (err) {
//       console.error('Error updating vote:', err);
//       res.status(500).json({ error: 'Server error' });
//     }
//   });

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updateStatus = req.body;

  try {
    // Find the document by ID and update the specified property
    const updatedEvent = await likeDislikeModal.findByIdAndUpdate(
      id,
      { $set: { yes: updateStatus.yes } }, // Use $set operator to update a specific property
      { new: true } // Return the updated document
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;