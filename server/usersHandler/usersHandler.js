const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schemas/usersSchema");

const usersModal = mongoose.model("user", userSchema);

router.put('/',async(req,res) => {
    const userInfo = req.body;
    const query = {email: userInfo.email}
      try{
        // insert email if user dose not exist
      const existingUser = await usersModal.findOne(query);
      if(existingUser){
        return res.send({message:"user already exists",insertedId: null})
      }
      const result = new usersModal(userInfo);
      await result.save()
      res.status(200).json({ message: "Users info store successfully", result });

      }
      catch(error){        
            console.error(error);
            res.status(500).json({ error: "Internal Server Error" }); 
      }
})

// Get all users
    router.get('/',async(req,res)=>{
      try{
        const result = await usersModal.find({});
        res.status(200).json({ message: "Get All users successfully", result });
      }
      catch(error){        
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" }); 
       }
    })
// Get Single Users
    router.get('/:email',async(req,res)=>{
      const email = req.params.email;
      const query = {email: email}
      try{
      const result = await usersModal.findOne(query);
      res.status(200).json({ message: "Get Single users successfully", result });
      }
      catch(error){        
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" }); 
      }
    })
module.exports = router;