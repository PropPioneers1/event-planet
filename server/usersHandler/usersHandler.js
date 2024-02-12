const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schemas/usersSchema");

const usersModal = mongoose.model("user", userSchema);

router.put('/',async(req,res) => {
    const userInfo = req.body;
    const query = {userEmail: userInfo.userEmail}
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
module.exports = router;