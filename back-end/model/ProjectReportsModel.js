// model/ProjectReportsModel.js

import mongoose from 'mongoose';

const projectReportsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const ProjectReports = mongoose.model('ProjectReports', projectReportsSchema);
export default ProjectReports;
