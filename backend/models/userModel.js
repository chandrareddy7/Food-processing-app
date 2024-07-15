const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  foodItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "FoodItem",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    enum: ["user", "vendor"],
    required: true,
  },
  cart: {
    items: [cartItemSchema],
  }
});

const User = mongoose.model("User", userSchema);
export default User;
