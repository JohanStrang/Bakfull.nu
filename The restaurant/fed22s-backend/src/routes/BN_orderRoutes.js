const express = require("express");

const router = express.Router();

const {
  getAllOrders,
  getOrderById,
  getOrderByCleaner,
  getOrderByMenu,
  createNewOrder,
  deleteOrderById,
} = require("../controllers/BN_orderController");

//api/v1/orders
router.get("/", getAllOrders);

//api/v1/orders/:orderId
router.get("/:orderId", getOrderById);

//api/v1/orders/:cleanerId
router.get("/:cleanerId", getOrderByCleaner);

//api/v1/orders/:menuId
router.get("/:restaurantId", getOrderByMenu);

//api/v1/orders
router.post("/", createNewOrder);

//api/v1//bookings/:bookingId'
router.delete("/:orderId", deleteOrderById);

module.exports = router;
