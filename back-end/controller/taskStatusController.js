// controller/taskStatusController.js
import TaskStatus from "../model/TaskStatus.js"; // Correct path to model

// Get all task statuses
export const getAllTaskStatuses = async (req, res) => {
  try {
    const taskStatuses = await TaskStatus.find();
    res.status(200).json(taskStatuses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new task status
export const createTaskStatus = async (req, res) => {
  const { projectName, teamName, progress, dueDate, status } = req.body;

  const newTaskStatus = new TaskStatus({
    projectName,
    teamName,
    progress,
    dueDate,
    status,
  });

  try {
    const savedTaskStatus = await newTaskStatus.save();
    res.status(201).json(savedTaskStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a task status
export const updateTaskStatus = async (req, res) => {
  const { id } = req.params;
  const { projectName, teamName, progress, dueDate, status } = req.body;

  try {
    const updatedTaskStatus = await TaskStatus.findByIdAndUpdate(
      id,
      { projectName, teamName, progress, dueDate, status },
      { new: true, runValidators: true }
    );

    if (!updatedTaskStatus) {
      return res.status(404).json({ message: "TaskStatus not found" });
    }

    res.status(200).json(updatedTaskStatus);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a task status
export const deleteTaskStatus = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTaskStatus = await TaskStatus.findByIdAndDelete(id);

    if (!deletedTaskStatus) {
      return res.status(404).json({ message: "TaskStatus not found" });
    }

    res.status(204).json(); // No content to return
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
