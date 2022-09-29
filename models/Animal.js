const mongoose = require("mongoose");

// setting up the blueprint
const AnimalSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  likes: {
    type: String,
  },
  dislikes: {
    type: String,
  },
  name: {
    type: String,
    required: true,
  },
  forAdoption: {
    type: String,
  },
  forFoster: {
    type: String,
  },
  // user associated with the particular Post from DB
  userId: {
    type: mongoose.Schema.Types.ObjectId,

    // referred to User form our models
    ref: "User",
  },
  postDate: {
    type: Date,
    // sets up a date if not is specified
    default: Date.now,
  },
});

// implement the Schema, specify also the collection where to store (Posts)
module.exports = mongoose.model("Animal", AnimalSchema);
