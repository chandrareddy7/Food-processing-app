import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import vendorRoute from "./routes/vendorRoute.js";

const app = express();
app.use(express.json());
dotenv.config();

const connectDB = await mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected!"));

app.use("/api/v1/vendors", vendorRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server listening on PORT ${process.env.PORT}`);
});
