import { User } from "../models/models.js";

const viewCart = (req, res) => {
  try {
    const cartItems = User.find({});
    return res.status(200).json({ cartItems });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error fetching cart items of user!", error: error });
  }
};

const addToCart = (req, res) => {
  res.send("Food Item added to cart");
};

const userOrders = (req, res) => {
  res.send("User orders list");
};

const placeOrder = (req, res) => {
  res.send("Order placed successfully");
};

export { viewCart, addToCart, userOrders, placeOrder };
