const mongoose = require("mongoose");

const Order = require("../models/BN_Order");
const Cleaner = require("../models/BN_Cleaner");
const Menu = require("../models/BN_Menu");
const Admin = require("../models/Admin");
const { NotFoundError, BadRequestError } = require("../utils/errors");

//Cleaner Routes
//getAllCleaners,
//getCleanerById,
//updateCleanerById,
//createNewCleaner,
//deleteCleanerById,

const cleanerCollection = require("../models/BN_Cleaner");

exports.getAllCleaners = async (req, res) => {
  try {
    const cleaner = await Cleaner.find();
    console.log(cleaner);
    if (!cleaner) throw new NotFoundError("No cleaner exist!");
    return res.status(200).json(cleaner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getCleanerById = async (req, res) => {
  try {
    const cleanerId = req.params.cleanerId;
    const cleaner = await Cleaner.findById(cleanerId);
    if (!cleaner) throw new NotFoundError("That cleaner does not exist");
    return res.status(200).json(cleaner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};


exports.updateCleanerById = async (req, res) => {
  try {
    
    const cleanerId = req.params.cleanerId;
    const newCleanerName = req.body.cleanerName;
    const newCleanerAddress = req.body.cleanerAddress;
    const newCleanerPostalCode = req.body.cleanerPostalCode;
    const newCleanerCity = req.body.cleanerCity;
    const newCleanerPhone = req.body.cleanerPhone;
    const newCleanerURL = req.body.cleanerURL;
    const newCleanerContact = req.body.cleanerContact;
    const newCleanerDescription = req.body.cleanerDescription;
    const newCleanerPrize = req.body.cleanerPrize;

    const cleaner = await Cleaner.findById(bookingId);
    if (!cleaner)
      throw new NotFoundError("Could not find cleaner information");

    if (newCleanerName) cleaner.cleanerName = newCleanerName;
    if (newCleanerAddress) cleaner.cleanerAddress = newCleanerAddress;
    if (newCleanerPostalCode) cleaner.cleanerPostalCode = newCleanerPostalCode;
    if (newCleanerCity) cleaner.cleanerCity = newCleanerCity;
    if (newCleanerPhone) cleaner.cleanerPhone = newCleanerPhone;
    if (newCleanerURL) cleaner.cleanerURL = newCleanerURL;
    if (newCleanerContact) cleaner.cleanerContact = newCleanerContact;
    if (newCleanerDescription) cleaner.cleanerDescription = newCleanerDescription;
    if (newCleanerPrize) cleaner.cleanerPrize = newCleanerPrize;

    const updatedCleaner = await cleaner.save();

    return res.status(200).json(updatedCleaner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};


exports.createNewCleaner = async (req, res) => {
  const {
    cleanerName,
    cleanerAddress,
    cleanerPostalCode,
    cleanerCity,
    cleanerPhone,
    cleanerURL,
    cleanerContact,
    cleanerDescription,
    cleanerPrize,
  } = req.body;

  try {
    if (!cleanerName || !cleanerAddress || !cleanerPostalCode || !cleanerCity || !cleanerPhone || 
      !cleanerURL || !cleanerContact || !cleanerDescription || !cleanerPrize) {
      return res.status(400).json({ error: "Missing required fields" });
    };


    const newCleaner = await Cleaner.create({
      cleanerId: newCleaner._id,
      cleanerName: cleanerName,
      cleanerAddress: cleanerAddress,
      cleanerPostalCode: cleanerPostalCode,
      cleanerCity: cleanerCity,
      cleanerPhone: customerPhone,
      cleanerURL: cleanerURL,
      cleanerContact: cleanerContact,
      cleanerDescription: cleanerDescription,
      cleanerPrize: cleanerPrize,
    });

    console.log("Creating new cleaner");

    const savedCleaner = await newCleaner.save();
    return res.status(201).json(savedCleaner);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteCleanerById = async (req, res) => {
  try {
    const cleanerId = req.params.cleanerId;
    const cleanerToDelete = await Cleaner.findById(cleanerId);
    if (!cleanerToDelete) throw new Error("Cleaner not found");

    await orderToDelete.deleteOne();
    return res.status(200).json({ message: "Cleaner deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
