import axios from "axios";
import { createContext } from "react";

export const initialState = {
  name: "",
  role: "",
  cart: ""
};

export const userContext = createContext();

export function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const existingItem = state.cart.find(
        (item) => item.foodItemId === action.id
      );
      if (existingItem) {
        const updatedCartItems = state.cart.map((item) =>
          item.foodItemId === action.id
            ? { ...item, count: item.count + 1 }
            : item
        );
        return { ...state, cart: updatedCartItems };
      } else {
        // const newItem = {
        //   name: "New Item Name",
        //   description: "New Item Description",
        //   price: "New Item Price",
        //   vendor: "New Item Vendor",
        //   count: 1,
        //   foodItemId: action.id,
        //   _id: action.id,
        // };
        // Get data of food item 
        const newItem = axios.get(`/foodItems/`)
        return { ...state, cart: [...state.cart, newItem] };
      }
    }
    case "remove": {
      const updatedCartItems = state.cart.map((item) =>
        item.foodItemId === action.id
          ? { ...item, count: item.count > 0 ? item.count - 1 : 0 }
          : item
      );
      return { ...state, cart: updatedCartItems };
    }
    case "setUserRole": {
      return { ...state, role: action.role };
    }
    case "setUserName": {
      return {...state, name: action.name };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
