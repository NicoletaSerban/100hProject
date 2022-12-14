const mongoose = require("mongoose");

// setting up the blueprint
const CommentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    required: true,
  },

  // user associated with the particular Post from DB
  post: {
    type: mongoose.Schema.Types.ObjectId,
    // referred to User form our models
    ref: "Post",
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // referred to User form our models
    ref: "User",
  },
  animalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Animal",
  },
  commentDate: {
    type: Date,
    // sets up a date if not is specified
    default: Date.now,
  },
});

// implement the Schema, specify also the collection where to store (Posts)
module.exports = mongoose.model("Comment", CommentSchema);
