const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const LikesCommentsSchema = require("../schemas/LikeCommentSchema");

// Use the exact case used in mongoose.model when defining the model
const LikesCommentsModel = mongoose.model(
  "likes-comments",
  LikesCommentsSchema
);

// get all users' comments for all posts
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  try {
    const result = await LikesCommentsModel.find({ blogId: id }).sort({
      commentsTime: -1,
    });
    res.status(200).send(result);
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const comments = req.body;
    const result = await LikesCommentsModel.insertMany(comments);
    res.status(201).json({ message: "Comment successful", result });
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { editComment } = req.body;
    console.log(editComment, id);
    const result = await LikesCommentsModel.findByIdAndUpdate(
      id,
      { $set: { comments: editComment } },
      { new: true }
    );
    res
      .status(200)
      .json({ status: 200, message: "updated the comment", result });
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await LikesCommentsModel.deleteOne({ _id: id });
    res.status(201).json({ message: "Comment deleted", result });
  } catch (err) {
    console.error(err);
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
