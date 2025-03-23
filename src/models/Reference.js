const mongoose = require("mongoose");

const referenceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authors: [String],
  year: Number,
  source: String,
  citation: String,
  document: { type: mongoose.Schema.Types.ObjectId, ref: "Document" },
}, { timestamps: true });

module.exports = mongoose.model("Reference", referenceSchema);
