const mongoose = require("mongoose");
const { tableStatus } = require("../constants/table");
const Schema = mongoose.Schema;

const cleanerSchema = new Schema(
    
  {  
    
    cleanerId: {
      type: mongoose.Schema.Types.ObjectId,
    },

 //  cleanerId: {
 //       type: mongoose.Schema.Types.ObjectId,
 //     },

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

  cleanerDescription: {
    type: String,
    required: true,
  },

  cleanerPrize: {
    type: Number,
  },

  cleanerUserName: {
    type: String,
  },

  cleanerPassword: {
    type: String,
  },


  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cleaner", cleanerSchema);