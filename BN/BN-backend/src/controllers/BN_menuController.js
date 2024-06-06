const mongoose = require("mongoose");

const Order = require("../models/BN_Order");
const Cleaner = require("../models/BN_Cleaner");
const Menu = require("../models/BN_Menu");
const Admin = require("../models/Admin");
const { NotFoundError, BadRequestError } = require("../utils/errors");

//Menu Routes
//getAllMenues,
//getMenuById,
//updateMenuById,
//createNewMenu,
//deleteMenuById,

const menuCollection = require("../models/BN_Menu");

exports.getAllMenues = async (req, res) => {
  try {
    const menu = await Menu.find();
    console.log(menu);
    if (!menu) throw new NotFoundError("No cleaner exist!");
    return res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getMenuById = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const menu = await Menu.findById(menuId);
    if (!menu) throw new NotFoundError("That menu item does not exist");
    return res.status(200).json(menu);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};


exports.updateMenuById = async (req, res) => {
  try {
    
    const menuId = req.params.menuId;
    const newRestaurantName = req.body.restaurantName;
    const newRestaurantAddress = req.body.restaurantAddress;
    const newRestaurantPostalCode = req.body.restaurantPostalCode;
    const newRestaurantCity = req.body.restaurantCity;
    const newRestaurantPhone = req.body.restaurantPhone;
    const newRestaurantURL = req.body.restaurantURL;
    const newRestaurantContact = req.body.restaurantContact;
    const newMenuDescription = req.body.menuDescription;
    const newMenuPrize = req.body.menuPrize;

    const menu = await Menu.findById(menuId);
    if (!menu)
      throw new NotFoundError("Could not find menu item information");

    if (newRestaurantName) menu.restaurantName = newRestaurantName;
    if (newRestaurantAddress) menu.restaurantAddress = newRestaurantAddress;
    if (newRestaurantPostalCode) menu.restaurantPostalCode = newRestaurantPostalCode;
    if (newRestaurantCity) menu.restaurantCity = newRestaurantCity;
    if (newRestaurantPhone) menu.restaurantPhone = newRestaurantPhone;
    if (newRestaurantURL) menu.restaurantURL = newRestaurantURL;
    if (newRestaurantContact) menu.restaurantContact = newRestaurantContact;
    if (newMenuDescription) menu.menuDescription = newMenuDescription;
    if (newMenuPrize) menu.menuPrize = newMenuPrize;

    const updatedMenu = await menu.save();

    return res.status(200).json(updatedMenu);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};


exports.createNewMenu = async (req, res) => {
  const {
    restaurantName,
    restaurantAddress,
    restaurantPostalCode,
    restaurantCity,
    restaurantPhone,
    restaurantURL,
    restaurantContact,
    menuDescription,
    menuPrize,
    restaurantUserName,
    restaurantPassword,
  } = req.body;

  try {
    if (!restaurantName || !restaurantAddress || !restaurantPostalCode || !restaurantCity || !restaurantPhone || 
      !restaurantURL || !restaurantContact || !menuDescription || !menuPrize) {
      return res.status(400).json({ error: "Missing required fields" });
    };


    const newMenu = await Menu.create({
      restaurantName: restaurantName,
      restaurantAddress: restaurantAddress,
      restaurantPostalCode: restaurantPostalCode,
      restaurantCity: restaurantCity,
      restaurantPhone: restaurantPhone,
      restaurantURL: restaurantURL,
      restaurantContact: restaurantContact,
      menuDescription: menuDescription,
      menuPrize: menuPrize,
      restaurantUserName: restaurantUserName,
      restaurantPassword: restaurantPassword,
    });

    console.log("Creating new menu item and restaurant");

    const savedMenu = await newMenu.save();
    return res.status(201).json(savedMenu);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteMenuById = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const menuToDelete = await Menu.findById(menuId);
    if (!menuToDelete) throw new Error("Menu item not found");

    await menuToDelete.deleteOne();
    return res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};


