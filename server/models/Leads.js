const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
  LeadID: {
    type: String,
    required: true,
    unique: true,
  },
  Status: {
    type: String,
    required: true,
    default: 'Active',
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
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
  City: {
    type: String,
  },
  Country: {
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

module.exports = mongoose.model('lead', LeadSchema);
