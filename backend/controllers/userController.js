import { User } from "../models/models.js";

const viewCart = async (req, res) => {
  try {
    const id = req.body.userId;
    const userExists = await User.findOne({ _id: id });
    if (userExists.length == 0) {
      return res.status(400).json({ message: "user doesn't exist" });
    }
    const cartItems = userExists.cart;
    return res.status(200).json({ cartItems });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error fetching cart items of user!", error: error });
  }
};

const addToCart = async (req, res) => {
  try {
    const { id, newItemId, quantity } = { ...req.body };
    const user = await User.findOne({ _id: id });
    if (user === null || user.length == 0) {
      return res.status(400).json({ message: "user doesn't exist" });
    }
    const cartItems = user.cart;
    const itemIndex = cartItems.findIndex(
      (item) => item.foodItemId === newItemId
    );
    let newCartItems;
    if (itemIndex == -1) {
      newCartItems = [
        ...cartItems,
        { foodItemId: newItemId, quantity: quantity },
      ];
    } else {
      newCartItems = [
        ...cartItems,
        {
          foodItemId: cartItems[itemIndex].foodItemId,
          quantity: cartItems[itemIndex].quantity + quantity,
        },
      ];
    }
    await User.findOneAndUpdate(
      { _id: id },
      { cart: newCartItems },
      { new: true }
    );
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error fetching cart items of user!", error: error });
  }
};

const userOrders = (req, res) => {
  res.send("User orders list");
};

const placeOrder = (req, res) => {
  res.send("Order placed successfully");
};

export { viewCart, addToCart, userOrders, placeOrder };
