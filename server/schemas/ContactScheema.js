const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  meet_link: {
    type: String,
    required: true
  }
});



module.exports = eventSchema
