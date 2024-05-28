const express = require("express");

const router = express.Router();

const {
  getAllMenues,
  getMenuById,
  updateMenuById,
  createNewMenu,
  deleteMenuById,
} = require("../controllers/cleanerController");

//api/v1/menues
router.get("/", getAllMenues);

//api/v1/menues/:menuId
router.get("/:cleanerId", getMenuById);

//api/v1/menues/:menuId
router.put("/:cleanerId", updateMenuById);

//api/v1/menues
router.post("/", createNewMenu);

//api/v1//menues/:menuId'
router.delete("/:cleanerId", deleteMenuById);

module.exports = router;
