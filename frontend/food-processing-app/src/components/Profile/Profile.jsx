import { Link, useNavigate } from "react-router-dom";
import "./Profile.css";
import { useContext } from "react";
import { userContext } from "../../contexts/userContext";

const Profile = () => {
  const { userData, dispatch } = useContext(userContext);
  const navigate = useNavigate();

  const signin = () => {
    navigate("/auth");
  };
  return (
    <div className="profile-comp">
      {userData.isUserLoggedIn ? (
        <div className="logged-in">
          <Link to="/orders" className="orders">
            Orders
          </Link>
          <Link to="/addfooditem" className="orders">
            Add a Food Item
          </Link>
          <button
            className="logout"
            onClick={() => {
              dispatch({ type: "userLoggedOut" });
              setTimeout(() => navigate("/"), 0);
            }}
          >
            Logout
          </button>
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
