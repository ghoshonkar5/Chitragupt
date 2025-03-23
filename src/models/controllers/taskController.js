const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, assignedTo, dueDate } = req.body;
    const task = new Task({ title, description, assignedTo, dueDate });

    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
