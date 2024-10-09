// model/TaskStatus.js
import mongoose from "mongoose";

const TaskStatusSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  teamName: { type: String, required: true },
  progress: { type: String, required: true },
  dueDate: { type: Date, required: true },
  status: { type: String, required: true },
});

// Export the Mongoose model
const TaskStatus = mongoose.model("TaskStatus", TaskStatusSchema);
export default TaskStatus;
