import { Router } from "express";
import { signUpSchema } from "../utils/types";
import User from "../models/user.model";

const userRouter = Router();

userRouter.get("/", (req, res) => {
  return res.status(200).json({ message: "Hi there" });
});

userRouter.post("/auth/signup", async (req, res) => {
  const result = signUpSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: "Invalid request schema",
    });
  }
  const { email, password, name, role } = result.data;
  try {
    const existingUser = await User.findOne({
      where: {
        email: email,
      },
    });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: "Email already exists",
      });
    }
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
      role: role,
    });
    return res.status(201).json({
      success: true,
      data: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      error: "Error message",
    });
  }
});



export default userRouter;
