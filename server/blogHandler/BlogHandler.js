const express = require('express');
const mongoose = require('mongoose');
const router=express.Router()
const BlogSchema=require ('../schemas/BlogShceema.js')

const blog = mongoose.model("Blog",BlogSchema)





router.post('/', async (req, res) => {
  const blogs = req.body;

  try {
    const result = await blog.insertMany(blogs);
    res.status(201).json({ message: 'Blogs posted successfully', result });
  } catch (error) {
    console.error('Error posting blogs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports=router;