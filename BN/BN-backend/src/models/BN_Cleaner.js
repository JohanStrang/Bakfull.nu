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
  },

  cleanerPostalCode: {
    type: String,
  },

  cleanerCity: {
    type: String,
  },

  cleanerPhone: {
    type: String,
  },

  cleanerURL: {
    type: String,
  },

  cleanerContact: {
    type: String,
  },

  cleanerDescription: {
    type: String,
    required: true,
  },

  cleanerPrize: {
    type: Number,
    required: true,
  },

  cleanerUserName: {
    type: String,
    required: true,
  },

  cleanerPassword: {
    type: String,
    required: true,
  },


  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cleaner", cleanerSchema);