import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userAuthRouter from "./routes/userAuthRouter.js";
import userRouter from "./routes/userRouter.js";
import checkRole from "./middleware/checkRole.js";
import vendorRouter from "./routes/vendorRoute.js";

const app = express();
app.use(express.json());
dotenv.config();

// connecting DB
const connectDB = await mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected!"));

// routes
const baseURL = "/api/v1";
app.get("/", (req, res) => {
  res.send("Hello from backend server");
});
app.use("/auth", userAuthRouter);
app.use("/user", checkRole("user"), userRouter);
app.use("/vendor", checkRole("vendor"), vendorRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
