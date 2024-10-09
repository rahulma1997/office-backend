import mongoose from "mongoose"; // Ensure mongoose is imported

const assignTaskSchema = new mongoose.Schema({
  projectname: { type: String, required: true },
  assignedTo: { type: String, required: true },
  dueDate: { type: Date, required: true },
  description: { type: String },
});

const AssignTask = mongoose.model("AssignTask", assignTaskSchema);
export default AssignTask;
