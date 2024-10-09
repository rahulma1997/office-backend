// routes/ProjectReportsRoutes.js

import express from 'express';
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controller/ProjectReportsController.js';

const router = express.Router();

router.get('/', getProjects);
router.post('/', createProject);
router.put('/:id', updateProject);
router.delete('/:id', deleteProject);

export default router;
