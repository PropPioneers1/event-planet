const mongoose = require('mongoose');

const EventTaskSchema = new mongoose.Schema({
  boardName: {
    type: String,
    required: true
  },
  boardBgImg: {
    type: String,
    required: true
  },
  task: {
    type: Object,
    required: true,
    todo: Array,
    progress: Array,
    completed:Array
  }
});



module.exports = EventTaskSchema
