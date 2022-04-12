const { Task } = require('../models');

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).send(tasks);
  } catch (err) {
    return res.status(400).send({ err });
  }
};

exports.getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findById(id);
    return res.status(200).send(task);
  } catch (err) {
    return res.status(400).send({ err });
  }
};

exports.addTask = async (req, res) => {
  const body = req.body;
  try {
    const task = new Task(body);
    const newTask = await task.save();
    return res.status(201).send(newTask);
  } catch (err) {
    return res.status(400).send({ err });
  }
};

exports.editTask = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const task = await Task.findByIdAndUpdate(id, body, { new: true });
    return res.status(200).send(task);
  } catch (err) {
    return res.status(400).send({ err });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    return res
      .status(200)
      .send({ status: 'OK', message: 'Task Successfully deleted' });
  } catch (err) {
    return res.status(400).send({ err });
  }
};
