import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import checkRole from "./middleware/checkRole.js";
import { userAuthRouter, userRouter, vendorRouter } from "./routes/routes.js";
import connectDB from "./config/connectDB.js";

const app = express();
app.use(express.json());
dotenv.config();

const startServer = async () => {
  await connectDB();
  const baseURL = "/api/v1";
  app.use(`${baseURL}/auth`, userAuthRouter);
  app.use(`${baseURL}/user`, userRouter);
  app.use(`${baseURL}/vendor`, checkRole("vendor"), vendorRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
  });
};

startServer();
