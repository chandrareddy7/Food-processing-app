import { Order, foodItem } from "../models/models.js";

const addFoodItem = async (req, res) => {
  const id = req.user.userId;
  const newfoodItem = new foodItem({ ...req.body, vendorId: id });
  try {
    await newfoodItem.save();
    return res.status(200).json({ message: "Food item saved" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Couldn't save food item!", error: error.errors });
  }
};

const deleteFoodItem = async (req, res) => {
  const reqfoodItemId = req.body.itemId;
  const reqvendorId = req.user.userId;
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
  return res.send("Food item deleted");
  } catch (error) {
    return res.status(400).json({ message: "Cannot delete food item!" });
  }
};

const viewOrders = async (req, res) => {
  try {
    const id = req.user.userId;
    const vendorOrders = await Order.find({ vendorId: id });
    return res.status(200).json({
      message: "Vendor orders fetched successfully",
      orders: vendorOrders,
    });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch orders." });
  }
};

const updateOrderStatus = async (req, res) => {
  try {
    const id = req.user.userId;
    const { orderId, status } = { ...req.body };
    const vendorOrders = await Order.findOneAndUpdate(
      { vendorId: id, orderId: orderId },
      { status: status },
      {
        new: true,
      }
    );
    return res.status(200).json({
      message: "order updated successfully",
      orders: vendorOrders,
    });
  } catch (error) {
    return res.status(400).json({ message: "Failed to update orders." });
  }
};

export { addFoodItem, deleteFoodItem, viewOrders, updateOrderStatus };
