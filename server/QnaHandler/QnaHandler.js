const express = require('express');
const mongoose = require('mongoose');
const router=express.Router()
const QnaSchema=require ('../schemas/QnaSchema')

const Qna =new mongoose.model("Qna",QnaSchema)





router.post('/', async (req, res) => {
  const newQna = new Qna(req.body);
  try {
    await newQna.save();
    res.status(201).json({ message: 'Qna inserted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});





module.exports=router;