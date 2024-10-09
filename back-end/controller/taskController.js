// controllers/taskController.js
import { Task } from "../model/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addTask = async (req, res) => {
  const { projectName, Status, dueDate, assign } = req.body;

  const newTask = new Task({
    projectName,
    Status,
    dueDate,
    assign,
    // projectManager
  });

  try {
    const savedTask = await newTask.save();
    res
      .status(201)
      .json({ message: "Task added successfully", task: savedTask });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const assignProject = (req, res) => {
  const { projectName, projectManager } = req.body;
  console.log(
    `Assigning project: ${projectName} to manager: ${projectManager}`
  );
  res.status(200).json({ message: "Project assigned successfully!" });
};
