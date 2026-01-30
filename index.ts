import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routers/user";
dotenv.config();
const MONGO_URL = process.env.MONGO_URI;
const app = express();

app.use(express.json());

async function main() {
  if (!MONGO_URL) {
    console.log("mongodb url is not a string");
    return;
  }
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Mongodb connected");
    app.use("/api/v1/user", userRouter);
    app.listen(3000, () => {
      console.log(`server is running on port:3000`);
    });
  } catch (error) {
    console.log("mongodb connection error");
  }
}
main();
