import { foodItem } from "../models/models.js";

const getAllFoodItems = async (req, res) => {
  try {
    const foodItems = await foodItem.find({});
    res.status(200).json({ foodItems });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch food Items" });
  }
};

export { getAllFoodItems };
