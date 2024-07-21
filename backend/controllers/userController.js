import { User, order } from "../models/models.js";

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
    const { id, newItemId, quantity, price } = { ...req.body };
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
        { foodItemId: newItemId, quantity: quantity, price: price },
      ];
    } else {
      newCartItems = [
        ...cartItems,
        {
          foodItemId: cartItems[itemIndex].foodItemId,
          quantity: cartItems[itemIndex].quantity + quantity,
          price: price,
        },
      ];
    }
    const updatedCart = await User.findOneAndUpdate(
      { _id: id },
      { cart: newCartItems },
      { new: true }
    ).then((user) => user.cart);
    return res
      .status(200)
      .json({ message: "user cart updated", cart: updatedCart });
  } catch (error) {
    return res
      .status(400)
      .json({ message: "Error fetching cart items of user!", error: error });
  }
};

const userOrders = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.body.id;
    console.log(id);
    const user = await User.findOne({ _id: id });
    console.log(user);
    if (user === null) {
      return res.json(400).message({ message: "User doesn't exist." });
    }
    const orders = await order.findOne({ _id: id }).then((user) => user.orders);
    return res
      .json(200)
      .message({ message: "user orders fetched successfully", orders });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch user orders!" });
  }
};

const placeOrder = (req, res) => {
  res.send("Order placed successfully");
};

export { viewCart, addToCart, userOrders, placeOrder };
