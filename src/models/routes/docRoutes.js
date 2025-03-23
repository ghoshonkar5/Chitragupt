const express = require("express");
const { createDocument, getDocuments } = require("../controllers/docController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createDocument);
router.get("/", authMiddleware, getDocuments);

module.exports = router;
