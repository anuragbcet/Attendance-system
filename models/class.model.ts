import mongoose, { Schema } from "mongoose";

const classSchema = new Schema({
  classname: { type: String, unique: true, required: true },
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  studentId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const Class = mongoose.model("Class", classSchema);

export default Class;
