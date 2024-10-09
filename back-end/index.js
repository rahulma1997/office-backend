
import express from "express";
import mongoose from "mongoose";
import projectRoutes from "./routes/projectRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes.js";
import overallProjectRoutes from "./routes/OverallProjectRoutes.js";
import ProjectReportsRoutes from "./routes/ProjectReportsRoutes.js";

import TaskManagement from "./routes/TaskManagement.js";
import taskStatusRoutes from "./routes/taskStatusRoutes.js";
import commentsRoutes from "./routes/commentsRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

import messageRoutes from "./routes/messageRoutes.js";
dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });

// Routes
app.use("/projects", projectRoutes); // Use project routes
app.use("/users", userRoutes); // Existing user routes
app.use("/task", taskRoutes); // Use task routes

app.use("/api/projects", overallProjectRoutes);
app.use("/api/projectreports", ProjectReportsRoutes);

app.use("/tasks/manager", TaskManagement);

app.use("/task-status", taskStatusRoutes);

app.use("/api/comments", commentsRoutes);

app.use("/api", fileRoutes);

app.use("/api/messages", messageRoutes);
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
