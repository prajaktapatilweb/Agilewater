const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  UserID: {
    type: String,
    required: true,
    unique: true,
  },
  Status: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Mobilenumber: {
    type: String,
    required: true,
  },
  Avatar: {
    type: String,
  },
  IsTrainer: {
    type: Boolean,
  },
});

module.exports = mongoose.model('user', UserSchema);
