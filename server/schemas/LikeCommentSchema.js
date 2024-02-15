const mongoose = require("mongoose");

const LikesCommentsSchema = mongoose.Schema({
  blogId: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  userPhoto: {
    type: String,
    require: true,
  },
  userEmail: {
    type: String,
    require: true,
  },
  isLike: {
    type: Boolean,
    require: true,
  },
  likesTime: {
    type: String,
    require: true,
  },
  comments: {
    type: String,
    require: true,
  },
  commentsTime: {
    type: String,
    require: true,
  },
});

module.exports = LikesCommentsSchema;
