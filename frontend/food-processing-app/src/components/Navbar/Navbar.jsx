import { IoSearchSharp } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="#menu">Menu</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <div className="logo">
        <img src="./src/assets/chef-logo.png" alt="chef" />
      </div>
      <div className="profile">
        <div className="cart icon">
          <ShoppingCartIcon />
        </div>
        <div className="profile icon">
          <PersonIcon />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
