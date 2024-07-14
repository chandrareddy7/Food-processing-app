import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: "Email address is required",
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 16,
  },
  phone: {
    type: Number,
    required: true,
  },
  countryCode: {
    type: Number,
    required: true,
  },
});

const vendor = mongoose.model("vendor", vendorSchema);

export default vendor;
