const mongoose = require('mongoose');

const MessageSchema =  mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  
});

module.exports = MessageSchema ;
