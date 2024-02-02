const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const BlogSchema = require("../schemas/BlogShceema.js");

const blogModel = mongoose.model("Blog", BlogSchema);

// getting all blogs
router.get("/", async (req, res) => {
  try {
    const result = await blogModel.find({});
    res.status(200).send(result);
  } catch (error) {
    console.log("Not Fount Block");
    res.status(500).json({ error: "internal server error" });
  }
});
// get a blog
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await blogModel.findById(id);
    res.status(200).send(result);
  } catch (error) {
    console.log("Not Fount Block");
    res.status(500).json({ error: "internal server error" });
  }
});

// post a blog
router.post("/", async (req, res) => {
  const blogs = req.body;

  try {
    const result = await blogModel.insertMany(blogs);
    res.status(201).json({ message: "Blogs posted successfully", result });
  } catch (error) {
    console.error("Error posting blogs:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//likes a blog
router.put("/:id/likes", async (req, res) => {
  const id = req.params.id;
  const blog = req.body;
  try {
    const data = await blogModel.findById(id);
    if (blog?.likes > data?.likes) {
      const result = await blogModel.findByIdAndUpdate(
        id,
        { $inc: { likes: 1 } }, // Increment the 'likes' field by 1
        { new: true } // Return the updated document
      );
      res.status(200).json(result);
    } else {
      const result = await blogModel.findByIdAndUpdate(
        id,
        { $inc: { likes: -1 } }, // Increment the 'likes' field by 1
        { new: true } // Return the updated document
      );
      res.status(200).json(result);
    }

    // res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// update blogs
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updatedBlog = req.body;
  console.log(updatedBlog);
  try {
    const result = await blogModel.findByIdAndUpdate(id, updatedBlog, {
      new: true,
    });
    res.status(200).json({ message: "Blog updated successfully", result });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// comment on blogs
router.put("/:id/comments", async (req, res) => {
  const id = req.params.id;
  const newComment = req.body;
  try {
    const result = await blogModel.findByIdAndUpdate(
      id,
      { $push: { comments: newComment } },
      { new: true }
    );

    res
      .status(200)
      .json({ status: 200, message: "You've commented on this blog", result });
  } catch (error) {
    res.status(500).json({ error: "Error has occurred" });
  }
});

// delete blog
router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const result = await blogModel.deleteOne({ _id: id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: "Error has occurred" });
  }
});

module.exports = router;
