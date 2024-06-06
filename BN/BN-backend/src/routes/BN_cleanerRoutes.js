const express = require("express");

const router = express.Router();

const {
  getAllCleaners,
  getCleanerById,
  updateCleanerById,
  createNewCleaner,
  deleteCleanerById,
} = require("../controllers/BN_cleanerController");

//api/v1/cleaners
router.get("/", getAllCleaners);

//api/v1/cleaners/:cleanerId
router.get("/:cleanerId", getCleanerById);

//api/v1/cleaners/:cleanerId
router.put("/:cleanerId", updateCleanerById);

//api/v1/cleaners
router.post("/", createNewCleaner);

//api/v1//cleaners/:cleanerId'
router.delete("/:cleanerId", deleteCleanerById);

module.exports = router;
