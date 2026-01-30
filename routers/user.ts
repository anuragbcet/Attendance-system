import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=>{
    return res.status(200).json({message:"Hi there"});
})

export default userRouter;