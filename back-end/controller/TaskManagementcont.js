import TaskManagementModel from "../model/TaskManagementmodel.js"; // Make sure to use the correct model name
import AssignTask from "../model/Assign.js";
// Create a new task
export const createTask = async (req, res) => {
  try {
    const newTask = new TaskManagementModel(req.body); // Use correct model here
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskManagementModel.find(); // Use correct model here
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const assignTask = async (req, res) => {

  try {
    const newAssignTask = new AssignTask(req.body);
    await newAssignTask.save();
    res.status(201).json(newAssignTask);
  } catch (error) {
    console.error("Error saving assignment:", error);
    res.status(400).json({ message: error.message });
  }
};


// Get all assigned tasks
export const getAssignedTasks = async (req, res) => {
  try {
    const assignedTasks = await AssignTask.find(); // Use the AssignTask model to get all assignments
    res.status(200).json(assignedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Update a task
export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTask = await TaskManagementModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedTask)
      return res.status(404).json({ message: "Task not found" });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTask = await TaskManagementModel.findByIdAndDelete(id);
    if (!deletedTask)
      return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
