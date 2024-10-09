import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  taskName: { type: String, required: true },
  assignedTo: { type: String, required: true },
  dueTo: { type: Date, required: true },
  description: { type: String, required: true },
  priorityLevel: { type: String, required: true },
  status: { type: String, required: true },
});

// Export the Mongoose model
export default mongoose.model("TaskManagementModel", taskSchema);

