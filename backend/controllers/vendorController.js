import { foodItem } from "../models/models.js";

const addFoodItem = async (req, res) => {
  const newfoodItem = new foodItem({ ...req.body });
  try {
    await newfoodItem
      .save()
      .then(() => res.status(200).json({ message: "Food item saved" }));
  } catch (error) {
    res
      .status(400)
      .json({ message: "Couldn't save food item!", error: error.errors });
  }
};

const deleteFoodItem = async (req, res) => {
  res.send("Food item deleted");
  const reqfoodItemId = req.body.itemId;
  const reqvendorId = req.body.vendorId;
  try {
    const itemExists = await foodItem.find({
      vendorId: reqvendorId,
      _id: reqfoodItemId,
    });
    if (itemExists.length == 0) {
      return res.status(400).json({ message: "Food Item doesn't exists!" });
    }
    await foodItem.findOneAndDelete({
      vendorId: reqvendorId,
      _id: reqfoodItemId,
    });
  } catch (error) {
    return res.status(400).json({ message: "Cannot delete food item!" });
  }
};

const viewOrders = (req, res) => {
  res.send("All orders placed by users to you");
};

const updateOrderStatus = (req, res) => {
  res.send("Updated order status ");
};

export { addFoodItem, deleteFoodItem, viewOrders, updateOrderStatus };
