const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const shopSchema=require('../schemas/shopSchema');
const shopModel=mongoose.model('Shop',shopSchema);




// Get all shoItem
router.get("/", async (req, res) => {
  try {
    const result = await shopModel.find({});
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});


// Post a shopItem
router.post("/", async (req, res) => {
  try {
    const newShopItem = new shopModel(req.body);
    await newShopItem.save();
    res.status(200).json({
      message: "Shop Item was inserted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
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