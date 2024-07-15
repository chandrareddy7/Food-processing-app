const viewCart = (req, res) => {
  res.send("User cart details sent");
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
