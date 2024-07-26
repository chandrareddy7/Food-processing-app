import "./Scroll.css";
import appetizerImage from "../../assets/appetizer.jpg";

const foodItemCategories = [
  "Appetizer",
  "Main Course",
  "Dessert",
  "Beverage",
  "Other",
  "Noodles",
  "Rolls",
  "Salads",
  "Soups",
  "Beverages",
  "Specials",
];

const extendedFoodCategoriesList = [
  ...foodItemCategories,
  ...foodItemCategories,
];

const Scroll = ({ category, scrollClickHandler }) => {
  return (
    <div className="scrollbar">
      {extendedFoodCategoriesList.map((cat, index) => {
        return (
          <div
            className={`fooditem-cat ${category === cat ? "active" : ""}`}
            key={index}
            onClick={() => {
              return scrollClickHandler(cat);
            }}
          >
            <img src={appetizerImage} alt="" />
            <div className="label">{cat}</div>
          </div>
        );
      })}
    </div>
  );
};
export default Scroll;
