const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
    
  {  menuId: {
        type: mongoose.Schema.Types.ObjectId,
      },

  restaurantName: {
    type: String,
    required: true,
  },

  restaurantAddress: {
    type: String,
  },

  restaurantPostalCode: {
    type: String,
  },

restaurantCity: {
    type: String,
  },

  restaurantPhone: {
    type: String,
  },

  restaurantURL: {
    type: String,
  },

  restaurantContact: {
    type: String,
  },

  menuDescription: {
    type: String,
  },

  menuPrize: {
    type: Number,
  },

  restaurantUserName: {
    type: String,
  },

  restaurantPassword: {
    type: String,
  },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", menuSchema);
