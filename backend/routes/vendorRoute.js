import { Router } from "express";
import vendor from "../models/vendorModel.js";

const vendorRoute = Router();

vendorRoute.get("/", (req, res) => {
  res.status(200).send("All vendors data");
});

vendorRoute.post("/signup", async (req, res) => {
  const vendorEmail = req.body.email;
  const isEmailUnique = await vendor.find({ email: vendorEmail });
  if (isEmailUnique.length > 0) {
    return res.status(404).send({
      message: "Email is already in use, please provide a new email address",
    });
  }
  const vendorData = new vendor({ ...req.body });
  vendorData
    .save()
    .then((user) => res.status(201).send("Vendor created"))
    .catch((err) => res.status(400).json("Error! " + err));
});

export default vendorRoute;
