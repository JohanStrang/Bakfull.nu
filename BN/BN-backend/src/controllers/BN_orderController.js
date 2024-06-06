const mongoose = require("mongoose");

const Order = require("../models/BN_Order");
const Cleaner = require("../models/BN_Cleaner");
const Menu = require("../models/BN_Menu");
const Admin = require("../models/Admin");
const { NotFoundError, BadRequestError } = require("../utils/errors");

// List of functions
//*******************
// getAllOrders,
// getOrderById,
// getOrderByCleaner,
// getOrderByRestaurant,
// createNewOrder,
// deleteOrderById,

const orderCollection = require("../models/BN_Order");

exports.getAllOrders = async (req, res) => {
  try {
    //const order = await Order.find().populate("menu").populate("cleaner");
    const order = await Order.find();
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

exports.getOrderByCustomerPhone = async (req, res) => {
  try {
    const customerPhone = req.query.customerPhone;
    const order = await Order.find(customerPhone);
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
    const cleanerId = req.body.cleanerId;
    const order = await Order.find(cleanerId);
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
    const menuId = req.body.menuId;
    const order = await Order.find(menuId);
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
      OrderDate,
      OrderTime,
      customerName,
      customerAddress,
      customerPostalCode,
      customerCity,
      customerPhone,
      cleanerId,
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
    //if (!customerName || !customerAddress || !customerPostalCode || !customerCity || !customerPhone) {
    //  return res.status(400).json({ error: "Missing required fields" });
   // };


    const newOrder = await Order.create({
      OrderDate: OrderDate,
      OrderTime: OrderTime,
      customerName: customerName,
      customerAddress: customerAddress,
      customerPostalCode: customerPostalCode,
      customerCity: customerCity,
      customerPhone: customerPhone,
      cleanerId: cleanerId,
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


exports.updateOrderById = async (req, res) => {
  try {
    
    const orderId = req.params.orderId;
    const newOrderDate = req.body.OrderDate;
    const newOrderTime = req.body.OrderTime;
    const newcustomerName = req.body.customerName;
    const newcustomerAddress = req.body.customerAddress;
    const newcustomerPostalCode = req.body.customerPostalCode;
    const newcustomerCity = req.body.customerCity;
    const newcustomerPhone = req.body.customerPhone;
    const newcleanerId = req.body.cleanerId;
    const newCleanerPrize = req.body.cleanerPrize;
    const newmenuId = req.body.menuId;
    const newmenuPrizeTotal = req.body.menuPrizeTotal;
    const neworderPrizeTotal = req.body.orderPrizeTotal;
    const newcleaningDone = req.body.cleaningDone;
    const newcleaningReview = req.body.cleaningReview;
    const newcleaningReviewComment = req.body.cleaningReviewComment;
    const newmenuDelivered= req.body.menuDelivered;
    const newmenuReview = req.body.menuReview;
    const newmenuReviewComment = req.body.menuReviewComment;

    const order = await Order.findById(orderId);
    if (!order)
      throw new NotFoundError("Could not find order information");

    if (newOrderDate) order.OrderDate = newOrderDate;
    if (newOrderTime) order.OrderTime = newOrderTime;
    if (newcustomerName) order.customerName = newcustomerName;
    if (newcustomerAddress) order.customerAddress = newcustomerAddress;
    if (newcustomerPostalCode) order.customerPostalCode = newcustomerPostalCode;
    if (newcustomerCity) order.customerCity = newcustomerCity;
    if (newcustomerPhone) order.customerPhone = newcustomerPhone;
    if (newcleanerId) order.cleanerId = newcleanerId;
    if (newCleanerPrize) order.cleanerPrize = newCleanerPrize;
    if (newmenuId) order.menuId = newmenuId;
    if (newmenuPrizeTotal) order.menuPrizeTotal = newmenuPrizeTotal;
    if (neworderPrizeTotal) order.orderPrizeTotal = neworderPrizeTotal;
    if (newcleaningDone) order.cleaningDone = newcleaningDone;
    if (newcleaningReview) order.cleaningReview = newcleaningReview;
    if (newcleaningReviewComment) order.cleaningReviewComment = newcleaningReviewComment;
    if (newmenuDelivered) order.menuDelivered = newmenuDelivered;
    if (newmenuReview) order.menuReview = newmenuReview;
    if (newmenuReviewComment) order.menuReviewComment = newmenuReviewComment;

    const updatedOrder = await order.save();

    return res.status(200).json(updatedOrder);
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
