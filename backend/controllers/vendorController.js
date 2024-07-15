const addFoodItem = (req, res) => {
  res.send("Food item added to your stock, It will be displayed to users");
};

const deleteFoodItem = (req, res) => {
  res.send("Food item deleted");
};

const viewOrders = (req, res) => {
  res.send("All orders placed by users to you");
};

const updateOrderStatus = (req, res) => {
  res.send("Updated order status ");
};

export { addFoodItem, deleteFoodItem, viewOrders, updateOrderStatus };
