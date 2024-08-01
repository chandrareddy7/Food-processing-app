import "./Menu.css";
import { useState } from "react";
import Scroll from "../Scroll/Scroll";
import FoodItems from "../FoodItems/FoodItems";
import { CartProvider } from "../../contexts/CartProvider";

const Menu = () => {
  const [category, setCategory] = useState("");
  function scrollClickHandler(eventCategory) {
    if (category === eventCategory) {
      setCategory("");
    } else {
      setCategory(eventCategory);
    }
  }
  return (
    <div className="menu" id="menu">
      <Scroll category={category} scrollClickHandler={scrollClickHandler} />
      <CartProvider>
        <FoodItems category={category} />
      </CartProvider>
    </div>
  );
};
export default Menu;
