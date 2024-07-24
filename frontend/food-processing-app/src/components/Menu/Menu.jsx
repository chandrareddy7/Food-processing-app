import "./Menu.css";
import appetizer from "../../assets/appetizer.jpg";

const foodItemCategories = [
  "Appetizer",
  "Main Course",
  "Dessert",
  "Beverage",
  "Other",
  "Noodles",
  "Rolls",
];

const Menu = () => {
  return (
    <div className="menu">
      <div className="scrollbar">
        {foodItemCategories.map((cat) => {
          return (
            <div className="fooditem-cat">
              <img src={appetizer} alt="" />
              <div className="label">{cat}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
