import React from "react";
import "./AddFoodItem.css";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;


const AddFoodItem = () => {
  const submitHandler = async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name")
  const description = formData.get("description")
  const price = formData.get("price")
  const category = formData.get("category")
  const newFoodItem = await axios.post(`${BASE_API_URL}/vendor/fooditems`, {
    name, description, price, category
  });
  if(newFoodItem){
    // TODO: Add a toast and reset the form
  }else{
    // TODO: Error toast and request to try again
  }
  }
  return (
    <div className="addfooditem">
      <div className="title">Add a new Food Item... </div>
      <form onSubmit={submitHandler} className="addfooditem-form">
        <label htmlFor="name">
          {" "}
          Name
          <input type="text" name="name" id="name" />
        </label>
        <label htmlFor="description">
          {" "}
          Description
          <input type="text" name="description" id="description" />
        </label>
        <label htmlFor="price">
          {" "}
          Price in $
          <input type="number" name="price" id="price" />
        </label>
        <label htmlFor="category">
          {" "}
          Category
          <select name="category" id="category">
            <option value="Appetizer">Appetizer</option>
            <option value="Main Course">Main Course</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
            <option value="Noodles">Noodles</option>
            <option value="Rolls">Rolls</option>
            <option value="Salads">Salads</option>
            <option value="Soups">Soups</option>
            <option value="Beverages">Beverages</option>
            <option value="Specials">Specials</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label htmlFor="image">
          {" "}
          Image of the dish
          <input type="file" name="image" id="image" accept="png/jpeg" />
        </label>
        <button type="submit" className="addfoodbtn">Add Food Item</button>
      </form>
    </div>
  );
};

export default AddFoodItem;
