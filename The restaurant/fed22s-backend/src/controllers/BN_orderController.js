const mongoose = require("mongoose");

const Order = require("../models/BN_Order");
const Cleaner = require("../models/BN_Cleaner");
const Menu = require("../models/BN_Menu");
const Admin = require("../models/Admin");
const { NotFoundError, BadRequestError } = require("../utils/errors");

// Order Routes
// getAllOrders,
// getOrderById,
// getOrderByCleaner,
// getOrderByRestaurant,
// createNewOrder,
// deleteOrderById,

const orderCollection = require("../models/BN_Order");

exports.getAllOrders = async (req, res) => {
  try {
    const order = await Order.find().populate("menu").populate("cleaner");
    console.log(order);
    //console.log(guest);
    if (!order) throw new NotFoundError("No order exist!");
    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId).populate("menu").populate("cleaner");
    if (!order) throw new NotFoundError("That order does not exist");
    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOrderByCleaner = async (req, res) => {
  try {
    const cleanerId = req.params.cleanerId;
    const order = await Order.findById(cleanerId).populate("menu").populate("cleaner");
    if (!order) throw new NotFoundError("That order does not exist");
    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.getOrderByMenu = async (req, res) => {
  try {
    const menuId = req.params.menuId;
    const order = await Menu.findById(menuId).populate("menu").populate("cleaner");
    if (!order) throw new NotFoundError("That order does not exist");
    return res.status(200).json(order);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.createNewOrder = async (req, res) => {
  const {
      customerName,
      customerAddress,
      customerPostalCode,
      customerCity,
      customerPhone,
      cleanerOrderId,
      cleanerPrize,
      menuId,
      menuPrizeTotal,
      orderPrizeTotal,
      cleaningDone,
      cleaningReview,
      cleaningReviewComment,
      menuDelivered,
      menuReview,
      menuReviewComment,
  } = req.body;

  try {
    if (!customerName || !customerAddress || !customerPostalCode || !customerCity || !customerPhone) {
      return res.status(400).json({ error: "Missing required fields" });
    };


    const newOrder = await Order.create({
      orderId: newOrder._id,
      customerName: customerName,
      customerAddress: customerAddress,
      customerPostalCode: customerPostalCode,
      customerCity: customerCity,
      customerPhone: customerPhone,
      cleanerOrderId: cleanerOrderId,
      cleanerPrize: cleanerPrize,
      menuId: menuId,
      menuPrizeTotal: menuPrizeTotal,
      orderPrizeTotal: orderPrizeTotal,
      cleaningDone: cleaningDone,
      cleaningReview: cleaningReview,
      cleaningReviewComment: cleaningReviewComment,
      menuDelivered: menuDelivered,
      menuReview: menuReview,
      menuReviewComment: menuReviewComment,
    });

    console.log("Creating new order");

    const savedOrder = await newOrder.save();
    return res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

exports.deleteOrderById = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const orderToDelete = await Order.findById(orderId);
    if (!orderToDelete) throw new Error("Order not found");

    await orderToDelete.deleteOne();
    return res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: error.message,
    });
  }
};
