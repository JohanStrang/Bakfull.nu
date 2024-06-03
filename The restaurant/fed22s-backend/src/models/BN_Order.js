const mongoose = require("mongoose");
const { tableStatus } = require("../constants/table");
const Schema = mongoose.Schema;
const Cleaner = require("./BN_Cleaner");
const Menu = require("./BN_Menu");

const orderSchema = new Schema(
    
  {  orderId: {
        type: mongoose.Schema.Types.ObjectId,
      },


 OrderDate: {
  type: String,
},

OrderTime: {
  type: String,
},

  customerName: {
    type: String,
  },

  customerAddress: {
    type: String,
  },

  customerPostalCode: {
    type: String,
  },

customerCity: {
    type: String,
  },

  customerPhone: {
    type: String,
  },

  cleanerId: {
    type: String,
  },

  cleanerPrize: {
    type: Number,
  },

  menuId: {
    type: String,
  },

  menuPrizeTotal: {
    type: Number,
  },

  orderPrizeTotal: {
    type: Number,
  },

  cleaningDone: {
    type: Boolean,
  },

  cleaningReview: {
    type: String,
  },

  cleaningReviewComment: {
    type: String,
  },

  menuDelivered: {
    type: Boolean,
  },

  menuReview: {
    type: String,
  },

  menuReviewComment: {
    type: String,
  },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
