import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { userContext } from "../../contexts/userContext";
import foodimage from "../../assets/appetizer.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  const { cartItems, dispatch } = useContext(userContext);
  const [bill, setBill] = useState({
    totalCost: 0,
    totalCount: 0,
  });
  const addFoodItem = (fooditemId) => {
    dispatch({
      type: "add",
      id: fooditemId,
    });
    console.log(fooditemId);
  };

  const removeFoodItem = (fooditemId) => {
    dispatch({
      type: "remove",
      id: fooditemId,
    });
    console.log(fooditemId);
  };
  useEffect(() => {
    let total = { totalCost: 0, totalCount: 0 };
    cartItems.cart.forEach((element) => {
      total.totalCost += element.price * element.count;
      total.totalCount += element.count;
    });
    setBill(total);
  }, [cartItems]);
  return (
    <div className="cart-component">
      <div className="heading">Cart Items</div>
      <div className="cart-items">
        {cartItems.cart.map((item, index) => {
          return (
            <div key={index}>
              <div className="cart-item">
                <img src={foodimage} alt="" />
                <div className="name">
                  {item.name} - <span>{item.description}</span>
                </div>
                <div className="cart-mod">
                  <div
                    className="remove cart-modicon"
                    onClick={() => removeFoodItem(item._id)}
                  >
                    <RemoveIcon />
                  </div>
                  <div className="count">{item.count}</div>
                  <div
                    className="add cart-modicon"
                    onClick={() => addFoodItem(item._id)}
                  >
                    <AddIcon />
                  </div>
                </div>
                <div className="vendor">{item.vendor}</div>
                <div className="price">
                  Total price : $ {item.price * item.count}
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="checkout">
        <div className="totalItems">
          <div className="title">Total Item count</div>
          {bill.totalCount}
        </div>
        <div className="totalCost">
          <div className="title">Total Cost</div>$ {bill.totalCost}
        </div>
        <div className="checkoutbutton">
          <button type="submit">Place Order</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
