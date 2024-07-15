const mongoose = require("mongoose");

const foodItemCategories = [
  "Appetizer",
  "Main Course",
  "Dessert",
  "Beverage",
  "Other",
  "Noodles",
  "Rolls",
];

const foodItemSchema = new mongoose.Schema({
  vendorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    enum: foodItemCategories,
    required: true,
  },
  imageUrl: {
    type: String,
  }
});

const FoodItem = mongoose.model("FoodItem", foodItemSchema);
export default FoodItem;
