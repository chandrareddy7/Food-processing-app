import mongoose from "mongoose";

const foodItemCategories = [
  "Appetizer",
  "Main Course",
  "Dessert",
  "Beverage",
  "Noodles",
  "Rolls",
  "Salads",
  "Soups",
  "Beverages",
  "Specials",
  "Other",
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
