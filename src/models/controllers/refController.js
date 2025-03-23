const Reference = require("../models/Reference");

exports.addReference = async (req, res) => {
  try {
    const { title, authors, year, source, citation, document } = req.body;
    const reference = new Reference({ title, authors, year, source, citation, document });

    await reference.save();
    res.status(201).json(reference);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getReferences = async (req, res) => {
  try {
    const references = await Reference.find().populate("document");
    res.json(references);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
