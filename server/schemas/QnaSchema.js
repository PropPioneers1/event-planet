const mongoose = require('mongoose');

const QnaSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone:{
    type:Number ,
    required: true
  },
  organization: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  },
  totalSeat: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  ticketPrice: {
    type: Number,
    required: true
  },
  speakers: {
    type: [String],
    required: true
  },
  eventPrice: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  eventImages: {
    type: [String],
    required: true
  },
  speakersImages: {
    type: [String],
    required: true
  },

  status: {
    type: String,
    required: true
  }
});
  




module.exports = QnaSchema ;
