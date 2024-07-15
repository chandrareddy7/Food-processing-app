import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
  vendorId: {
    type: ObjectId,
    required: true,
  },
});

const order = mongoose.model("order", orderSchema);

export default order;
