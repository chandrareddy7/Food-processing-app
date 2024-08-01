export const calculateTotal = (items) => {
  let total = { totalCost: 0, totalCount: 0 };
  items.forEach((element) => {
    total.totalCost += element.price * element.count;
    total.totalCount += element.count;
  });
  return total.totalCost;
};
