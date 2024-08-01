import { createContext } from "react";

export const initialState = {
  name: "usernameekljerlj",
  cart: [
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "669e9085ea6bdfaa0e9aea04",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0bf964d41869bdab741",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0dce1fe835a5956a51c",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0e23ea10d3f1a45f017",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0e7ce9384765b6ae49a",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0ec9d12647b31650a23",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0f02f70a4f82607da84",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0f6084f04068c19f3d5",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e0fba7f4387257fe8fc7",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e1004c245ef53424b9e1",
    },
    {
      name: "Chicken 65",
      description: "65 pieces of chicked",
      price: "69",
      vendor: "SNR FOOD COURT",
      count: 69,
      foodItemId: "123456",
      _id: "66a7e1079faf64d879839476",
    },
  ],
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
        const newItem = {
          name: "New Item Name",
          description: "New Item Description",
          price: "New Item Price",
          vendor: "New Item Vendor",
          count: 1,
          foodItemId: action.id,
          _id: action.id,
        };
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
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
