const mongoose = require('mongoose');

const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinterestdb");

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post"
  }],
  dp: {
    type: String, // URL or path to the display picture
  },
  email: {
    type: String,
    unique: true,
  },
  fullname: {
    type: String,
  }
});

// Create the User model
userSchema.plugin(plm);
const User = mongoose.model('User', userSchema);

module.exports = User;
