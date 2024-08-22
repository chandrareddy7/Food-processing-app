import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authandcheckRole from "./middleware/authandcheckRole.js";
import {
  userAuthRouter,
  userRouter,
  vendorRouter,
  foodItemsRouter,
} from "./routes/routes.js";
import connectDB from "./config/connectDB.js";
import cookieParser from "cookie-parser";


const app = express();

dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))

const startServer = async () => {
  await connectDB();
  const baseURL = "/api/v1";
  app.use(`${baseURL}/auth`, userAuthRouter);
  app.use(`${baseURL}/user`, authandcheckRole("user"), userRouter);
  app.use(`${baseURL}/vendor`, authandcheckRole("vendor"), vendorRouter);
  app.use(`${baseURL}/fooditems`, foodItemsRouter);

  app.listen(process.env.PORT, () => {
    console.log(`Server listening on PORT ${process.env.PORT}`);
  });
};

startServer();
