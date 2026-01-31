import { Router } from "express";
import { signInSchema, signUpSchema } from "../utils/types";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from "../models/user.model";

const JWT_SECRET = process.env.JWT_SECRET || "";

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
    
    const hashedPassword = await bcrypt.hash(password,10);
    console.group(hashedPassword);
    const newUser = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      role: "Student",
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

userRouter.post("/auth/signin", async (req, res) => {
  const result = signInSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      error: "Invalid request schema",
    });
  }
  try {
    const {email,password} = result.data;
    const user = await User.findOne({
      email
    });
    if(!user){
      return res.status(400).json({
        success: false,
        error: "User not found",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if(match){
      const token = jwt.sign({
        userId: user._id,
        role: user.role
      }, JWT_SECRET, { expiresIn: '1d' })
      return res.status(201).json({
        status:"success",
        token:token
      })
    }
    return res.status(401).json({
      status:"fail",
      message:"Enter correct password"
    })
  } catch (error) {
    return res.status(401).json({message:"User not authorized"})
  }
});

export default userRouter;
