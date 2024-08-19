import React, { useReducer } from "react";
import { userContext, cartReducer, initialState } from "./userContext";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const CartProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(cartReducer, initialState);
  
  return (
    <userContext.Provider value={{ userData, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
