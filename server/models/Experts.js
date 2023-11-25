const mongoose = require('mongoose');


const ExpertSchema = new mongoose.Schema({
  ExpertID: {
    type: String,
    required: true,
    unique: true,
  },
  Status: {
    type: String,
    required: true,
    default: 'Active',
  },
  Name: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    // required: true,
  },
  Phone: {
    type: Number,
  },
  Certification: {
    type: String,
  },

  Message: {
    type: String,
  },
  EnquiryFromLink: {
    type: String,
  },
  Created: {
    OnDate: {
      type: Date,
      default: Date.now,
    },
  },

});

module.exports = mongoose.model('expert', ExpertSchema);
