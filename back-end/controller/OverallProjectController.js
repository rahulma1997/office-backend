// // controller/OverallProjectController.js
// import { OverallProject } from '../model/OverallProjectModel.js';

// const projects = []; // This should ideally be managed in the database

// export const getAllProjects = (req, res) => {
//   res.json(projects);
// };

// import { OverallProject } from '../model/OverallProjectModel.js';

// export const createProject = async (req, res) => {
//   try {
//     const newProject = new OverallProject({
//       name: req.body.name,
//       progress: req.body.progress,
//       status: req.body.status,
//       totalTasks: req.body.totalTasks,
//       completedTasks: req.body.completedTasks,
//     });

//     const savedProject = await newProject.save(); // Save to MongoDB
//     res.status(201).json(savedProject);
//   } catch (error) {
//     console.error("Error creating project:", error);
//     res.status(400).json({ message: error.message });
//   }
// };


// export const updateProject = (req, res) => {
//   const { id } = req.params;
//   const projectIndex = projects.findIndex(project => project.id === id);
  
//   if (projectIndex !== -1) {
//     const updatedProject = { ...projects[projectIndex], ...req.body };
//     projects[projectIndex] = updatedProject;
//     res.json(updatedProject);
//   } else {
//     res.status(404).send('Project not found');
//   }
// };

// export const deleteProject = (req, res) => {
//   const { id } = req.params;
//   const projectIndex = projects.findIndex(project => project.id === id);
  
//   if (projectIndex !== -1) {
//     projects.splice(projectIndex, 1);
//     res.status(204).send();
//   } else {
//     res.status(404).send('Project not found');
//   }
// };



// controller/OverallProjectController.js
import { OverallProject } from '../model/OverallProjectModel.js';

export const getAllProjects = async (req, res) => {
  try {
    const projects = await OverallProject.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const newProject = new OverallProject({
      name: req.body.name,
      progress: req.body.progress,
      status: req.body.status,
      totalTasks: req.body.totalTasks,
      completedTasks: req.body.completedTasks,
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProject = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedProject = await OverallProject.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedProject) {
      return res.status(404).send('Project not found');
    }
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProject = await OverallProject.findByIdAndDelete(id);
    if (!deletedProject) {
      return res.status(404).send('Project not found');
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
