import { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { userContext } from "../../contexts/userContext";
import foodimage from "../../assets/appetizer.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
const VITE_REACT_STRIPE_PUB_KEY = import.meta.env.VITE_REACT_STRIPE_PUB_KEY;

const Cart = () => {
  const makePayment = async () => {
    const stripe = await loadStripe(VITE_REACT_STRIPE_PUB_KEY);
    const body = { products: userData.cart };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await axios.post(`${BASE_API_URL}/checkout-session`, body);
    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      console.log(result.error);
    }
  };
  const { userData, dispatch } = useContext(userContext);
  const [bill, setBill] = useState({
    totalCost: 0,
    totalCount: 0,
  });
  const addFoodItem = (fooditemId) => {
    dispatch({
      type: "add",
      id: fooditemId,
    });
  };

  const removeFoodItem = (fooditemId) => {
    dispatch({
      type: "remove",
      id: fooditemId,
    });
  };
  useEffect(() => {
    let total = { totalCost: 0, totalCount: 0 };
    userData.cart.forEach((element) => {
      total.totalCost += element.price * element.count;
      total.totalCount += element.count;
    });
    setBill(total);
  }, [userData]);
  return (
    <div className="cart-component">
      <div className="heading">Cart Items</div>
      <div className="cart-items">
        {userData.cart.map((item, index) => {
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
        <div className="checkoutbutton" onClick={makePayment}>
          <button type="submit">Place Order</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
