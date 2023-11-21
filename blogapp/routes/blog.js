const express = require("express");
const router = express.Router();

// Import Controller
const { dummyLink } = require("../controllers/likeController");

// Mapping - Create
router.get("/dummy", dummyLink);

module.exports = router;
