import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Authpage from "./Pages/Authpage/Authpage";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import Orders from "./Pages/Orders/Orders";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Authpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

/**
 * TODO: User should be directed to home page initially.
 * If user tries to add items to cart check if they are logged in or not? prompt them for logging in.
 * If user clicks on orders page or profile page check if they are logged in or not. prompt them for loggin in.
 * Implement auth using jwt.
 * After signup or signin redirect to home page.
 */

export default App;
