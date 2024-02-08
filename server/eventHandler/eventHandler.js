const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const eventSchema = require('../schemas/eventSchema');
const eventModel = mongoose.model('Event', eventSchema);

// Get all the todo
router.get("/", async (req, res) => {
  let query = {}
  const page = parseInt(req.query.page);
  const eventCount = await eventModel.countDocuments({})

  if (page >= 0) {
    const limit = 8;
    const skip = page * limit
    query = await eventModel.find({}).skip(skip).limit(limit);
  }
  else {
    query = await eventModel.find({});
  }

  try {
    const result = query;
    res.status(200).send({ eventCount, events: result });
  } catch (error) {
    console.log("Not Fount Block");
    res.status(500).json({ error: "internal server error" });
  }
});

// Get a todo by ID
router.get("/:id", async (req, res) => {
  // Implement your logic here
});

// Post a todo
// router.post("/", async (req, res) => {
//   const newevent = new Event(req.body);
//   try {
//     await  newevent.save();
//     res.status(201).json({ message: "inserted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: " Server Error" });
//   }
// });
router.post("/", async (req, res) => {
  try {
    const newEvent = await eventModel.create(req.body);
    res.status(201).json({ message: "inserted successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Post multiple todos
router.post("/all", async (req, res) => {

});

// Put todo
router.put("/:id", (req, res) => {

});

// Patch todo
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const updateStatus = req.body; 

  try {
    // Find the document by ID and update the specified property
    const updatedEvent = await eventModel.findByIdAndUpdate(
      id,
      { $set: { status: updateStatus.status } }, // Use $set operator to update a specific property
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

// update many todo
router.put("/new/:title", (req, res) => {

});

// Delete todo
router.delete("/:id", async (req, res) => {
  // Implement your logic here
});

module.exports = router;
