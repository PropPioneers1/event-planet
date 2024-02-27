const mongoose = require('mongoose');

const MessageSchema =  mongoose.Schema({
  
  body: {
    type: String,
  },
  
});

module.exports = MessageSchema ;
