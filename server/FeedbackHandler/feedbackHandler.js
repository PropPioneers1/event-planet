const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const FeedBackSchema = require('../schemas/FeedBackSchema');
const feedBackModal = mongoose.model("feedback",FeedBackSchema);


// post route
router.post("/",async(req,res)=>{
  try{
      const data = new feedBackModal(req.body);
      console.log("feedback data",data)
      const result = await data.save();
      res.status(200).json({
          message:"feedback data succefully inserted",
          result,
      })
  }
  catch(err){
      res.status(500).json({
          error: "There was a server-side error",
      })
  }
})
router.get("/:id",async(req,res)=>{
  const id = req.params.id
  try{
    const result = await feedBackModal.find({id:id});
    res.status(200).json({result});
  }
  catch(err){
    res.status(500).json({
        error: "There was a server-side error",
    })
}
})
  module.exports = router;
  
