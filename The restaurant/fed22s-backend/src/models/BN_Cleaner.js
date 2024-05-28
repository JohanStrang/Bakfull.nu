const mongoose = require("mongoose");
const { tableStatus } = require("../constants/table");
const Schema = mongoose.Schema;

const cleanerSchema = new Schema(
    
  {  orderCleanerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OrderCleanerID",
      },

    cleanerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cleanerID",
      },

  cleanerName: {
    type: String,
    required: true,
  },

  cleanerAddress: {
    type: String,
    required: true,
  },

  cleanerPostalCode: {
    type: String,
    required: true,
  },

  cleanerCity: {
    type: String,
    required: true,
  },

  cleanerPhone: {
    type: String,
    required: true,
  },

  cleanerURL: {
    type: String,
    required: true,
  },

  cleanerContact: {
    type: String,
    required: true,
  },

  cleanerItem: {
    type: String,
    required: true,
  },

  cleanerDescription: {
    type: String,
    required: true,
  },

  cleanerPrize: {
    type: Number,
    required: true,
  },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cleaner", cleanerSchema);