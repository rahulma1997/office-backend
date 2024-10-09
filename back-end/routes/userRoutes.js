import express from "express";
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  uploadProfilePicture,
} from "../controller/userController.js"; // Ensure this path is correct

const router = express.Router();

router.post("/", uploadProfilePicture, createUser); // Create a new user
router.get("/", getAllUsers); // Get all users
router.get("/:id", getUserById); // Get user by ID
router.put("/userID/:userID", uploadProfilePicture, updateUser);
 // Update user by ID
//router.delete("/:id", deleteUser); // Delete user by ID

router.delete("/userID/:userID", deleteUser); // Delete user by userID

export default router;

//http:/localhost:5000/users/
