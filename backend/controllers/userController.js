import { User, Order } from "../models/models.js";

const viewCart = async (req, res) => {
  try {
    const id = req.user.userId;
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
    const id = req.user.userId;
    const { vendorId, foodItem, quantity, price } = req.body;
    let user = await User.findOne({ _id: id });
    if (!user) {
      return res.status(400).json({ message: "user doesn't exist" });
    }
    const cartItems = user.cart;
    const itemIndex = cartItems.findIndex((item) => {
      return item.foodItemId.equals(foodItem);
    });
    if (cartItems.length != 0) {
      if (cartItems[0].vendorId != vendorId) {
        return res.status(400).json({
          message:
            "Please add items from the same vendor to your cart, or clear your cart before adding items from a new vendor.",
        });
      }
    }
    let newCartItems;
    if (itemIndex === -1) {
      if (quantity < 0) {
        return res.status(400).json({
          message: "Cannot remove an item which is not added to cart before.",
        });
      }
      newCartItems = [
        ...cartItems,
        {
          foodItemId: foodItem,
          quantity: quantity,
          price: price,
          vendorId: vendorId,
        },
      ];
    } else {
      if (quantity < 0 && cartItems[itemIndex].quantity < Math.abs(quantity)) {
        return res.status(400).json({
          message: "Cannot remove more items than present in the cart.",
        });
      }
      newCartItems = [...cartItems];
      newCartItems[itemIndex].quantity += quantity;
      if (newCartItems[itemIndex].quantity === 0) {
        newCartItems.splice(itemIndex, 1);
      }
    }
    user = await User.findOneAndUpdate(
      { _id: id },
      { cart: newCartItems },
      { new: true }
    );
    const updatedCart = user.cart;
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
    const id = req.user.userId;
    const user = await User.findOne({ _id: id });
    if (user === null) {
      return res.status(400).message({ message: "User doesn't exist." });
    }
    const orders = await Order.find({ userId: id });
    if (orders.length == 0) {
      return res.status(200).json({ message: "No orders yet" });
    }
    return res
      .status(200)
      .json({ message: "user orders fetched successfully", orders });
  } catch (error) {
    return res.status(400).json({ message: "Failed to fetch user orders!" });
  }
};

const placeOrder = async (req, res) => {
  try {
    const id = req.user.userId;
    const user = await User.findOne({ _id: id });
    const userCart = user.cart;
    const newOrder = new Order({
      userId: id,
      items: userCart,
      vendorId: userCart[0].vendorId,
    });
    const order = await newOrder.save();
    // Send an sms to vendor abt the order, send an order confirmation sms to the user
    return res.status(200).json({
      message:
        "Your food items are ordered, you will be getting an sms shortly",
    });
  } catch (error) {
    return res.status(400).json({
      message: "Failed to order items, please try again",
    });
  }
};

export { viewCart, addToCart, userOrders, placeOrder };
