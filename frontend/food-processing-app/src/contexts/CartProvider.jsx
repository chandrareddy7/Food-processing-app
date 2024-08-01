import React, { useReducer } from "react";
import { userContext, cartReducer, initialState } from "./userContext";

export const CartProvider = ({ children }) => {
  const [cartItems, dispatch] = useReducer(cartReducer, initialState);

  return (
    <userContext.Provider value={{ cartItems, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
