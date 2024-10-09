// routes/taskRoutes.js
import { Router } from "express";
import { getTasks, addTask } from "../controller/taskController.js";

const router = Router();

router.get("/", getTasks);
router.post("/add", addTask);
// router.post("/assign", assignProject);

export default router;
