const express = require("express");

const router = express.Router();

const {
  getAllMenues,
  getMenuById,
  updateMenuById,
  createNewMenu,
  deleteMenuById,
} = require("../controllers/BN_menuController");

//api/v1/menues
router.get("/", getAllMenues);

//api/v1/menues/:menuId
router.get("/:menuId", getMenuById);

//api/v1/menues/:menuId
router.put("/:menuId", updateMenuById);

//api/v1/menues
router.post("/", createNewMenu);

//api/v1//menues/:menuId'
router.delete("/:menuId", deleteMenuById);

module.exports = router;
