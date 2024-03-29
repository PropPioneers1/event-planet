const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const userSchema = require("../schemas/usersSchema");

const usersModal = mongoose.model("user", userSchema);

router.put("/", async (req, res) => {
  const userInfo = req.body;
  const query = { email: userInfo?.email };
  console.log(userInfo, query, "<==================");
  try {
    // insert email if user dose not exist
    const existingUser = await usersModal.findOne(query);
    if (existingUser) {
      const updatedUser = await usersModal.findOneAndUpdate(query, userInfo, {
        new: true,
      });
      return res.status(200).json(updatedUser);
    }
    const result = new usersModal(userInfo);
    await result.save();
    res.status(200).json({ message: "Users info store successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get('/userCount',async(req,res)=>{
  try {
    const userCount = await usersModal.countDocuments({});

    res.status(200).send({ userCount });
  } catch (error) {
    console.log("Not Fount Block");
    res.status(500).json({ error: "internal server error" });
  }
})

// Get all users
router.get("/", async (req, res) => {
  try {
    const result = await usersModal.find({});
    res.status(200).json({ message: "Get All users successfully", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// Get Single Users
router.get("/:email", async (req, res) => {
  const email = req.params.email;
  const query = { email: email };
  try {
    const result = await usersModal.findOne(query);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// get role
router.get("/role/:email", async (req, res) => {
  const email = req.params.email;
  // const query = { email: email }
  try {
    const result = await usersModal.findOne({ email });
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
