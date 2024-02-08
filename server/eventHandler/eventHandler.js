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
 
  if(page >=0){
    const limit = 8;
    const skip = page * limit
    query = await eventModel.find({}).skip(skip).limit(limit);
  }
  else{
    query = await eventModel.find({});
  }

  try {
    const result = query;
    res.status(200).send({eventCount,events:result});
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
router.post("/", async (req, res) => {


});

// Post multiple todos
router.post("/all", async (req, res) => {

});

// Put todo
router.put("/:id", (req, res) => {

});

router.put("/:id", (req, res) => {

});

// update many todo
router.put("/new/:title", (req, res) => {

});

// Delete todo
router.delete("/:id", async (req, res) => {
  // Implement your logic here
});

module.exports = router;
