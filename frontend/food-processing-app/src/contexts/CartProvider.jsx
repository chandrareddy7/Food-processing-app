import React, { useEffect, useReducer } from "react";
import { userContext, cartReducer, initialState } from "./userContext";
import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

export const CartProvider = ({ children }) => {
  const [userData, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.log("No token found, user not logged in");
          return;
        }

        const response = await axios.get(`${BASE_API_URL}/user/cart`, headers, {
          'Authorization': `Bearer ${token}`
        });
        if (response.data) {
          dispatch({
            type: "INITIALIZE_USER",
            payload: {
              name: response.data.name,
              role: response.data.role,
              isUserLoggedIn: true,
            },
          });
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <userContext.Provider value={{ userData, dispatch }}>
      {children}
    </userContext.Provider>
  );
};
