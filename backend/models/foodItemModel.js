import {mongoose, Schema} from "mongoose";

const foodItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name is required",
  },
  price: {
    type: Number,
    required: true,
  },
  vendorId: {
    type: Schema.Types.ObjectId,
    ref: "vendor",
  },
});

const foodItem = mongoose.model("foodItem", foodItemSchema);

export default foodItem;
