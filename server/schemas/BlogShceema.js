const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
  category: String,
  blogImg: String,
  title: String,
  post: String,
  likes: Number,
  postedTimestamp: String,
  comments: Array,
  user: {
    name: String,
    email: String,
    userImage: String,
  },
});

module.exports = BlogSchema;
