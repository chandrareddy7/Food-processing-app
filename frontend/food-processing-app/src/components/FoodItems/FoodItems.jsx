import "./FoodItems.css";
import appetizer from "../../assets/appetizer.jpg";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const FoodItems = ({ category }) => {
  const [foodItemsList, setFoodItemsList] = useState([]);
  useEffect(() => {
    axios
      .get(`${BASE_API_URL}/fooditems`)
      .then((data) => {
        return setFoodItemsList(data.data.foodItems);
      })
      .catch((error) => console.log(error));
  }, []);
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
                <div className="remove cartmodicon">
                  <RemoveIcon />
                </div>
                <div className="count">0</div>
                <div className="add cartmodicon">
                  <AddIcon />
                </div>
              </div>
            </div>
            <div className="name">{item.name}</div>
            <div className="description">{item.description}</div>
            <div className="vendor">Restuarant Name</div>
          </div>
        );
      })}
    </div>
  );
};
export default FoodItems;
