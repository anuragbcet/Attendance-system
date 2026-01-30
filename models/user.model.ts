import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["Teacher", "Student"], default: "Student" },
});

const User = mongoose.model("User", userSchema);

export default User;
