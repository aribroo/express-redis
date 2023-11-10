import express from 'express';
import { getUserRepo } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/api/github', getUserRepo);

export default userRouter;
