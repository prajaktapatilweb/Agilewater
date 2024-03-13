const mongoose = require('mongoose');

const CouponListSchema = new mongoose.Schema({
  Status: {
    type: String,
    required: true,
    default: 'Active',
  },
  CouponID: {
    type: String,
    required: true,
    unique: true,
  },
  DiscountCode: {
    type: String,
    required: true,
    unique: true,
  },
  DiscountType: {
    type: String,
  },
  CouponStartDate: {
    type: Date,
  },
  CouponEndDate: {
    type: Date,
  },
  NumberofTimes: {
    type: Number,
  },
  UsedTimes: {
    type: Number,
  },
  DiscountAmount: {
    type: Number,
  },
  DiscountAmountType: {
    type: String,
  },
  TicketType: {
    type: Array,
  },
  Created: {
    ByID: {
      type: String,
    },
    ByName: {
      type: String,
    },
    OnDate: {
      type: Date,
      default: Date.now,
    },
  },
  Updation: [
    {
      ByID: {
        type: String,
      },
      ByName: {
        type: String,
      },
      OnDate: {
        type: Date,
        default: Date.now,
      },
      Updates: {
        type: Object,
      },
    },
  ],
  Deletion: {
    ByID: {
      type: String,
    },
    ByName: {
      type: String,
    },
    OnDate: {
      type: Date,
      // default: Date.now,
    },
    DeleteReason: {
      type: String,
    },
  },
});

module.exports = mongoose.model('couponlist', CouponListSchema);
