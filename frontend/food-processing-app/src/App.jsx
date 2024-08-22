import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Authpage from "./Pages/Authpage/Authpage";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Orders/Orders";
import AddFoodItem from "./Pages/AddFoodItem/AddFoodItem";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Authpage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/addfooditem" element={<AddFoodItem />} />
          </Routes>
          <Footer />
        </CartProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
