const express = require("express");
const { addReference, getReferences } = require("../controllers/refController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addReference);
router.get("/", authMiddleware, getReferences);

module.exports = router;
