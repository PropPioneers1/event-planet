const mongoose = require('mongoose');



const BlogSchema = mongoose.Schema({
  _id: Number,
  category: String,
  blogImg: String,
  title: String,
  post: String,
  tags: [String],
  likes: Number,
  postedTimestamp: String,
  comments:Array,
  user: {
    username: String,
    name: String,
    userImage: String,
  },
});



module.exports =BlogSchema