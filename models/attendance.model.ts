import mongoose, { Schema } from "mongoose";

const attendanceSchema = new Schema({
  classId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Class",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  status: { type: String, enum: ["present", "absent"] },
});

const Attendance = mongoose.model("Attendance", attendanceSchema);

export default Attendance;