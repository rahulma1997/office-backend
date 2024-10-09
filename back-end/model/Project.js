import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  budget: { type: Number, required: true }, //
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  projectManager: {
    type: String,
    required: true,
  },
  priority: {
    type: String, required: true
    // enum: ["low", "medium", "high"], //
    // default: "medium",
  },
  status: {
    type: String, required: true
    // enum: ["pending", "in-progress", "completed"],
    // default: "pending",
  },
  // createdAt: { type: Date, default: Date.now },
});

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
