const mongoose = require('mongoose');

const NotificationTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
  }
  
});



module.exports = NotificationTokenSchema ;
