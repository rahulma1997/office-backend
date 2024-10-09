import UserModel from "../model/User.js";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
import multer from "multer";
import dotenv from "dotenv";

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Send email function
const sendEmail = async (email, userID, password) => {
  const transporter = nodemailer.createTransport({
    service: "mahajannarendra643@gmail.com", // Use your email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your User ID and Password",
    text: `Your User ID: ${userID}\nYour Password: ${password}`,
  };

  await transporter.sendMail(mailOptions);
};

// // Create a new user
// export const createUser = async (req, res) => {
//   const { userID, firstName, lastName, email, mobile, role, address } =
//     req.body;

//   // Generate a random password (you can customize this)
//   const password = Math.random().toString(36).slice(-8);
//   const hashedPassword = await bcrypt.hash(password, 10);

//   try {
//     const newUser = new UserModel({
//       userID,
//       firstName,
//       lastName,
//       email,
//       mobile,
//       password: hashedPassword,
//       // designation,
//       role,
//       address,
//       profilePicture: req.file ? req.file.path : null, // Save the image path
//     });

//     await newUser.save();
//     await sendEmail(email, newUser.userID, password); // Send email with ID and password
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
export const createUser = async (req, res) => {
  const {
    userID,
    firstName,
    lastName,
    email,
    mobile,
    role,
    address,
    password,
  } = req.body;

  // Hash the password provided in the request
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = new UserModel({
      userID,
      firstName,
      lastName,
      email,
      mobile,
      password: hashedPassword,
      role,
      address,
      profilePicture: req.file ? req.file.path : null, // Save the image path
    });

    await newUser.save();
    await sendEmail(email, userID, password); // Send email with ID and password
    res.status(201).json(newUser);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exists." });
    }
    res.status(400).json({ message: error.message });
  }
};

// Middleware for uploading profile picture
export const uploadProfilePicture = upload.single("profilePicture");

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a user
// export const updateUser = async (req, res) => {
//   const {
//     userID,
//     firstName,
//     lastName,
//     email,
//     mobile,
//     password,
//     role,
//     joiningDate,
//     status,
//     profilePicture,
//     address,
//   } = req.body;

//   try {
//     const updatedUser = await UserModel.findByIdAndUpdate(
//       req.params.id,
//       {
//         userID,
//         firstName,
//         lastName,
//         email,
//         mobile,
//         password,
//         role,
//         joiningDate,
//         status,
//         profilePicture,
//         address,
//         //profilePicture: req.file ? req.file.path : undefined, // Update the image path if provided
//       },
//       { new: true } // Return the updated document
//     );

//     if (!updatedUser)
//       return res.status(404).json({ message: "User not found" });
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

export const updateUser = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    mobile,
    password,
    role,
    joiningDate,
    status,
    address,
  } = req.body;

  try {
    const updateData = {
      firstName,
      lastName,
      email,
      mobile,
      role,
      joiningDate,
      status,
      address,
    };

    // Hash the password if it's provided
    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    // Find the user by userID instead of id
    const updatedUser = await UserModel.findOneAndUpdate(
      { userID: req.params.userID },  // Use userID from params
      updateData,
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




// Delete a user
// export const deleteUser = async (req, res) => {
//   try {
//     const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
//     if (!deletedUser)
//       return res.status(404).json({ message: "User not found" });
//     res.status(204).send(); // No content
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

export const deleteUser = async (req, res) => {
  const { userID } = req.params; // Extract userID from the request parameters

  try {
    const deletedUser = await UserModel.findOneAndDelete({ userID }); // Find user by userID
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error(error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
};
