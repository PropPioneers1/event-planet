const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const eventSchema = require("../schemas/eventSchema");
const eventModel = mongoose.model("Event", eventSchema);

// Get all the todo
router.get("/", async (req, res) => {
  const eventTitle = req.query.title;
  const eventCategory = req.query.category;
  const eventState = req.query.state;
  const eventCity = req.query.city;
  const email = req.query.email;
  const status = req.query.status

  const page = parseInt(req.query.page);
  const limit = 8;
  const skip = page * limit;
  let query = {};

  if (eventTitle) {
    query.eventName = eventTitle;
  }
  if (eventCategory) {
    query.category = eventCategory;
  }
  if (eventState) {
    query.state = eventState;
  }
  if (eventCity) { tsque
    query.city = eventCity;
  }
  if(email){
    query.email = email;
  }
  if(status){
    query.status = status;
  }
  

  try {
    const eventCount = await eventModel.countDocuments(query);
    const result = await eventModel.find(query).skip(skip).limit(limit);

    res.status(200).send({ eventCount, events: result });
  } catch (error) {
    console.log("Not Fount Block");
    res.status(500).json({ error: "internal server error" });
  }
});

// Get a todo by ID
router.get("/:id", async (req, res) => {
  // Implement your logic here
  try {
    const id = req.params.id;

    const result = await eventModel.findById(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).json({ error: "internal server error" });
  }
});


router.get("/:ids", async (req, res) => {
  try {
    const {  ids } = req.params;
    if ( !ids) {
      return res.status(400).json({ error: "Missing email or ids" });
    }
    const idsArray = ids.split(",");

    const result = await eventModel.find({ _id: { $in: idsArray } });

    // Send the result
    res.status(200).send(result);
  } catch (error) {
    // Handle errors
    console.error("Error fetching events:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


router.post("/", async (req, res) => {
  try {
    const newEvent = await eventModel.create(req.body);
    res.status(201).json({ message: "inserted successfully", event: newEvent });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ error: "Server Error" });
  }
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
router.put("/new/:title", (req, res) => {});

// Delete todo
router.delete("/:id", async (req, res) => {
  // Implement your logic here
});

module.exports = router;
