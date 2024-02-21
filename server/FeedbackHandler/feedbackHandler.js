const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const FeedBackSchema = require('../schemas/FeedBackSchema');
const feedBackModal = mongoose.model("feedback",FeedBackSchema);


// post route
router.post("/",async(req,res)=>{
  try{
    const data = new feedBackModal(req.body);
      // const data = new feedBackModal.create(req.body);
      console.log("feedback data",data)
      const result = await data.save();
      res.status(200).json({
          message:"feedback data succefully inserted",
          result,
      })
  }
  catch(err){
    console.error(err);
    res.status(500).json({
        error: "There was a server-side error",
    });
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

router.get("/:title/:id", async (req, res) => {
  const { id, title } = req.params;

  try {
    const result = await feedBackModal.find({ id: id, product_name: title }).limit(5);
    res.status(200).json({ result });
  } catch (err) {
    res.status(500).json({
      error: "There was a server-side error",
    });
  }
});



// put requst

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { vote } = req.body;
  console.log(vote)

  try {
      let updateQuery = {};
      if (vote === 'yes') {
          updateQuery = { $inc: { yes: 1 } }; // Increment the "yes" field by 1
      } else if (vote === 'no') {
          updateQuery = { $inc: { no: 1 } }; // Increment the "no" field by 1
      } else {
          return res.status(400).json({ error: "Invalid vote" });
      }

      // Find the document by ID and update the specified property
      const updatedFeedback = await feedBackModal.findByIdAndUpdate(
          id,
          updateQuery,
          { new: true } // Return the updated document
      );

      if (!updatedFeedback) {
          return res.status(404).json({ error: "Feedback not found" });
      }

      res.status(200).json({ success: true });
  } catch (error) {
      console.error("Error updating feedback:", error);
      res.status(500).json({ error: "Internal server error" });
  }
});

  module.exports = router;
  
