import express from "express";
import {
  createTask,
  assignTask,
  getTasks,
  getAssignedTasks,
  updateTask,
  deleteTask,
} from "../controller/TaskManagementcont.js";

const router = express.Router();

router.post("/create", createTask);
router.get("/get", getTasks);
router.post("/Assign",assignTask)
router.get("/assigned", getAssignedTasks); // New route for getting assigned tasks

router.put("/:id", updateTask); // Update route
router.delete("/:id", deleteTask); // Delete route

export default router;
