const Document = require("../models/Document");

exports.createDocument = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newDoc = new Document({ title, content, authors: [req.user.id] });

    await newDoc.save();
    res.status(201).json(newDoc);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getDocuments = async (req, res) => {
  try {
    const documents = await Document.find({ authors: req.user.id });
    res.json(documents);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
