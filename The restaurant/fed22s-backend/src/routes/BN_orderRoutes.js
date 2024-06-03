const express = require("express");

const router = express.Router();

const {
  getAllOrders,
  getOrderById,
  getOrderByCleaner,
  getOrderByMenu,
  createNewOrder,
  deleteOrderById,
  getOrderByCustomerPhone,
  updateOrderById
} = require("../controllers/BN_orderController");

//api/v1/orders
router.get("/", getAllOrders);

//api/v1/orders/:orderId
router.get("/:orderId", getOrderById);

//api/v1/orders/:customerPhone
router.get("/phone/:customerPhone", getOrderByCustomerPhone);

//api/v1/orders/:cleanerId
router.get("/cleaner/:cleanerId", getOrderByCleaner);

//api/v1/orders/:menuId
router.get("/restaurant/:menuId", getOrderByMenu);

//api/v1/orders
router.post("/", createNewOrder);

//api/v1//bookings/:orderId'
router.delete("/:orderId", deleteOrderById);

//api/v1//bookings/:orderId'
router.put("/:orderId", updateOrderById);

module.exports = router;
