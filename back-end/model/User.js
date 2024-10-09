import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userID: { type: String, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  mobile: { type: Number, required: true },
  password: { type: String, required: true },
  // designation: { type: String, required: true },
  role: { type: String, required: true },
  joiningDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["active", "inactive"], default: "active" },
  profilePicture: { type: String }, // URL or path to the uploaded image
  address: { type: String },
});

// Pre-save hook to generate userID
// userSchema.pre("save", async function (next) {
//   if (!this.userID) {
//     const count = await this.model("User").countDocuments();
//     this.userID = `OFM-${String(count + 1).padStart(2, "0")}`;
//   }
//   next();
// });

const UserModel = mongoose.model("User", userSchema);

export default UserModel;






