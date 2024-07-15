import { mongoose, Schema } from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "vendor",
  },
});

const order = mongoose.model("order", orderSchema);

export default order;
