import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import checkRole from "./middleware/checkRole.js";
import {
  userAuthRouter,
  userRouter,
  vendorRouter,
  foodItemsRouter,
} from "./routes/routes.js";
import connectDB from "./config/connectDB.js";

const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();

const startServer = async () => {
  await connectDB();
  const baseURL = "/api/v1";
  app.use(`${baseURL}/auth`, userAuthRouter);
  app.use(`${baseURL}/user`, userRouter);
  app.use(`${baseURL}/vendor`, vendorRouter);
  app.use(`${baseURL}/fooditems`, foodItemsRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
  });
};

startServer();
