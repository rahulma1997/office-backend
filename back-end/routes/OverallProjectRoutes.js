// // routes/OverallProjectRoutes.js
// import express from "express";
// import {
//   getAllProjects,
//   createProject,
//   updateProject,
//   deleteProject,
// } from "../controller/OverallProjectController.js";

// const router = express.Router();

// router.get("/", getAllProjects);
// router.post("/", createProject);
// router.put("/:id", updateProject);
// router.delete("/:id", deleteProject);

// export default router;



// routes/OverallProjectRoutes.js
import express from "express";
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controller/OverallProjectController.js";

const router = express.Router();

router.get("/", getAllProjects);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
