const Task = require("../models/Tasks");

const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: "Name must be less tha 20 chatacters" });
  }
};

const getTask = (req, res) => {
  res.json({ response: "Welcome to task api" });
};

const updateTask = (req, res) => {
  res.json({ response: "You sent put request" });
};

const deleteTask = (req, res) => {
  res.json({ response: "You sent delete request" });
};

module.exports = { getAllTasks, createTasks, getTask, updateTask, deleteTask };
