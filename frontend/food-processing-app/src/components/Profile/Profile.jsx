import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useState } from "react";

const Profile = () => {
  const navigate = useNavigate();
  const [userSignedIn, setUserSignedIn] = useState(true);
  const signin = () => {
    navigate("/auth");
  };
  return (
    <div className="profile-comp">
      {userSignedIn ? (
        <div className="logged-in">
          <Link to="/orders" className="orders">
            Orders
          </Link>
          <Link to="/addfooditem" className="orders">
            Add a Food Item
          </Link>
          <button className="logout">Logout</button>
        </div>
      ) : (
        <button className="logout" onClick={signin}>
          {" "}
          Sign In
        </button>
      )}
    </div>
  );
};
export default Profile;
