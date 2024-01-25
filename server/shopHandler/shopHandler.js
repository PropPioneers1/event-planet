const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const shopSchema=require('../schemas/shopSchema');
const shopModel=mongoose.model('Shop',shopSchema);

// Get all the todo
router.get("/", async (req, res) => {
  
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



module.exports=router;