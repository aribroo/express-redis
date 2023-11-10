import express from 'express';
import userRouter from '../routes/user.router.js';
import { errorMiddleware } from '../middleware/error.middleware.js';

const app = express();

app.use(userRouter);
app.use(errorMiddleware);

export default app;
