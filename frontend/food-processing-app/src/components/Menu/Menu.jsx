import "./Menu.css";
import { useState } from "react";
import Scroll from "../Scroll/Scroll";
import FoodItems from "../FoodItems/FoodItems";

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
    <div className="menu">
      <Scroll category={category} scrollClickHandler={scrollClickHandler} />
      <FoodItems category={category}/>
    </div>
  );
};
export default Menu;
