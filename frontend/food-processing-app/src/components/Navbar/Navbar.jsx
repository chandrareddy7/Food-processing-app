import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Profile from "../Profile/Profile";

const Navbar = () => {
  const style = { color: "white" };
  return (
    <div className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/#menu">Menu</a>
        <a href="/#footer">Contact Us</a>
      </div>
      <div className="logo">
        <img src="./src/assets/chef-logo.png" alt="chef" />
      </div>
      <div className="profile">
        <div className="cart icon">
          <Link to="/cart">
            <ShoppingCartIcon style={style} />
          </Link>
        </div>
        <div className="profile icon">
          <Link>
            <PersonIcon style={style} />
          </Link>
          <div className="profilecomp">
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
