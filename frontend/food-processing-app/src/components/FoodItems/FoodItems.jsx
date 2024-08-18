import "./FoodItems.css";
import appetizer from "../../assets/appetizer.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState, useReducer, useContext } from "react";
import axios from "axios";
import {
  cartReducer,
  initialState,
  userContext,
} from "../../contexts/userContext";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const FoodItems = ({ category }) => {
  const [foodItemsList, setFoodItemsList] = useState([]);
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);
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
    axios
      .get(`${BASE_API_URL}/fooditems`, {withCredentials: true})
      .then((data) => {
        return setFoodItemsList(data.data.foodItems);
      })
      .catch((error) => console.log(error));
  }, []);

  const getItemCount = (fooditemId) => {
    const item = cartItems.cart.find((cartItem) => cartItem._id === fooditemId);
    return item ? item.count : 0;
  };

  return (
    <div className="fooditems">
      {foodItemsList.map((item, index) => {
        return (
          <div
            className={`fooditem ${
              category != "" && category != item.category ? "hidden" : ""
            }`}
            key={index}
          >
            <div className="fooditem-img">
              <img src={appetizer} alt="" />
              <div className="cartmod">
                <div
                  className="remove cartmodicon"
                  onClick={() => removeFoodItem(item._id)}
                >
                  <RemoveIcon />
                </div>
                <div className="count">{getItemCount(item._id)}</div>
                <div
                  className="add cartmodicon"
                  onClick={() => addFoodItem(item._id)}
                >
                  <AddIcon />
                </div>
              </div>
            </div>
            <div className="name">{item.name}</div>
            <div className="price">$ {item.price}</div>
            <div className="description">{item.description}</div>
            <div className="vendor">Restuarant Name</div>
          </div>
        );
      })}
    </div>
  );
};
export default FoodItems;
