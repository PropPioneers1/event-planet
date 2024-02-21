const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const upcomingDetailSchema = require("../schemas/upComingDetailSchema");
const upcomingDetailsModal = mongoose.model("EventDetail",upcomingDetailSchema);

// post upcoming details data

router.post("/",async(req,res)=>{
    try{
        const data = new upcomingDetailsModal(req.body);
        console.log("upcoming details data",data)
        const result = await data.save();
        res.status(200).json({
            message:"Event booking data succefully inserted",
        })
    }
    catch(err){
        res.status(500).json({
            error: "There was a server-side error",
        })
    }
})

router.get("/", async (req, res) => {
    const id = req.params.id;
    try {
      const result = await upcomingDetailsModal.find({});
      res.status(200).json({ result });
    } catch (err) {
      res.status(500).json({
        error: "There was a server-side error",
      });
    }
  });

module.exports = router;