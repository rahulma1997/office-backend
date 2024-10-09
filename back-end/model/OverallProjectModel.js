// // model/OverallProjectModel.js
// import mongoose from 'mongoose';

// const overallProjectSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   progress: { type: Number, required: true },
//   status: { type: String, required: true },
//   totalTasks: { type: Number, required: true },
//   completedTasks: { type: Number, required: true },
// }, { timestamps: true });

// export const OverallProject = mongoose.model("OverallProject", overallProjectSchema);




// model/OverallProjectModel.js
import mongoose from 'mongoose';

const overallProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  progress: { type: Number, required: true },
  status: { type: String, required: true },
  totalTasks: { type: Number, required: true },
  completedTasks: { type: Number, required: true },
}, { timestamps: true });

export const OverallProject = mongoose.model("OverallProject", overallProjectSchema);
