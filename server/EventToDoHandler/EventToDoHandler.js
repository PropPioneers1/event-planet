const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const EventToDoSchema = require("../schemas/EventToDoSchema/EventToDoSchema");

const eventToDoModel = mongoose.model("EventTodo", EventToDoSchema);


// getting all the boards
router.get("/:id", async (req, res) => {
    const {id} = req.params;
    const query = {boardId: id}
    try {
        const result = await eventToDoModel.find(query);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: "internal server error" });
    }
})

// getting single board
router.get("/:id", async (req, res) => {

})


// Posting board data 
router.post("/", async (req, res) => {
    const todo = req.body;
    try {
        const result = await eventToDoModel.create(todo);
        res.status(200).send(result);
    } catch (error) {
        res.status(500).json({ error: "internal server error" });
    }

});

// updating todo
router.put("/:id", async (req, res) => {

});


module.exports = router;
