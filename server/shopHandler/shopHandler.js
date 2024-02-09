const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const shopSchema = require("../schemas/shopSchema");
const shopCartSchema = require("../schemas/shopCartSchema");
const shopModel = mongoose.model("Shop", shopSchema);
const shopCartModel=mongoose.model('shopcart',shopCartSchema)

// Get all shoItem
router.get("/", async (req, res) => {
  try {
    console.log(req.query)
    const page=parseInt(req.query.page);
    const size=parseInt(req.query.size);
    
    const result = await shopModel.find({}).skip(page * size).limit(size);
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});




router.get("/details-shopCart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await shopModel.findById(id); // Use findById directly for single document retrieval
    if (!result) {
      return res.status(404).json({ error: "Shopping cart item not found" });
    }
    res.status(200).json({ result });
  } catch (err) {
    console.error(err);
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

router.post("/shopCart/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let document = await shopCartModel.findOne({ _id: id });
    if (!document) {
      document = new shopCartModel({ _id: id, ...req.body });
    } else {
      document.set(req.body);
    }
    await document.save();

    res.status(200).json({ message: "Data posted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// for pagination total products get route
router.get('/totalProducts',async(req,res)=>{
  try{
    
    const count=await shopModel.estimatedDocumentCount();
    res.status(200).json({ count});
  }catch(error){
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
})

module.exports = router;
