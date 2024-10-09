// models/Task.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  Status: { type: String, required: true }, // Note: Changed 'Status' to 'status' for consistency
  dueDate: { type: Date, required: true },
  assign: { type: String, required: true },
  // projectManager: { type: String, required: true }, // Uncomment if needed
}); 



export const Task = mongoose.model("Task", taskSchema);
