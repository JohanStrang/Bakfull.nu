const mongoose = require("mongoose");
const { tableStatus } = require("../constants/table");
const Schema = mongoose.Schema;

const menuSchema = new Schema(
    
  {  menuID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "menuID",
      },

      restuarantID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "restaurantID",
      },

  restaurantName: {
    type: String,
    required: true,
  },

  restaurantAddress: {
    type: String,
    required: true,
  },

  restaurantPostalCode: {
    type: String,
    required: true,
  },

restaurantCity: {
    type: String,
    required: true,
  },

  restaurantPhone: {
    type: String,
    required: true,
  },

  restaurantURL: {
    type: String,
    required: true,
  },

  restaurantContact: {
    type: String,
    required: true,
  },

  menuItem: {
    type: String,
    required: true,
  },

  menuDescription: {
    type: String,
    required: true,
  },

  menuPrize: {
    type: Number,
    required: true,
  },

  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Menu", menuSchema);
