import { Router } from "express";
import vendor from "../models/vendorModel.js";

const vendorRoute = Router();

vendorRoute.get("/", async (req, res) => {
  const vendors = await vendor.find({});
  res.status(200).send({ vendors });
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

vendorRoute.post("/signin", async (req, res) => {
  const creds = { ...req.body };
  console.log(await vendor.find({email: creds.email, password: creds.password}));
  const isValid = await vendor
    .find({ creds })
    .then((vendorData) => res.status(200).json({ vendor: vendorData }))
    .catch((err) => res.status(401).json({ message: "Wrong credentials." }));
});

export default vendorRoute;
