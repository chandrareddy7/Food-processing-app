import { foodItem } from "../models/models.js";

const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await foodItem.find({});
    res.status(200).json({ foodItems });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food Items" });
  }
};

const getFoodItemById = async (req, res) => {
  try {
    const foodItem = await foodItem.find({_id: req.body.id});
    console.log(foodItem);
    res.status(200).json({ foodItems });
  } catch (error) {
    res.status(500).json({ message: "Failed to Add food Items" });
  }
};

export { getAllFoodItems, getFoodItemById };
