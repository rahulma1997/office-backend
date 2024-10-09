// routes/taskStatusRoutes.js
import express from "express";
import {
  getAllTaskStatuses,
  createTaskStatus,
  updateTaskStatus,
  deleteTaskStatus,
} from "../controller/taskStatusController.js"; // Correct path to controller

const router = express.Router();

// Define routes
router.get("/", getAllTaskStatuses);
router.post("/", createTaskStatus);
router.put("/:id", updateTaskStatus);  // Update a task status
router.delete("/:id", deleteTaskStatus); // Delete a task status

export default router;
