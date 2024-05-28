const mongoose = require("mongoose");
const { tableStatus } = require("../constants/table");
const Schema = mongoose.Schema;
const Cleaner = require("./BN_Cleaner");
const Menu = require("./BN_Menu");

const orderSchema = new Schema(
    
  {  orderID: {
        type: mongoose.Schema.Types.ObjectId,
      },

      customerID: {
        type: mongoose.Schema.Types.ObjectId,
      },

  customerName: {
    type: String,
    required: true,
  },

  customerAddress: {
    type: String,
    required: true,
  },

  customerPostalCode: {
    type: String,
    required: true,
  },

customerCity: {
    type: String,
    required: true,
  },

  customerPhone: {
    type: String,
    required: true,
  },

  cleanerOrderID: {
    type: Number,
    ref: "Cleaner",
  },

  orderCleanerPrize: {
    type: Number,
  },

  menu: [{
    type: Number,
    ref: "Menu",
  }],

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
