const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinterestdb");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  posts: [],
  dp: {
    type: String, // URL or path to the display picture
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  }
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
