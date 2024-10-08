import { useContext, useEffect, useReducer, useState } from "react";
import "./Authpage.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/userContext";

const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

const Authpage = () => {
  const { userData, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("signIn");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    if (activeButton === "signUp") {
      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const mobile = formData.get("mobilenumber");
      const password = formData.get("password");
      const roles = formData.get("role")

      await axios
        .post(`${BASE_API_URL}/auth/signup`, {
          name,
          email,
          mobile,
          password,
          roles
        })
        .then((response) => {
          notify("success", "Signed up successfully, please sign in now!");
        })
        .catch((error) => {
          notify("error", error.response.data.message);
        });
    } else if (activeButton === "signIn") {
      const formData = new FormData(form);
      const email = formData.get("email");
      const password = formData.get("password");
      await axios
        .post(`${BASE_API_URL}/auth/signin`, {
          email,
          password,
        })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userId', response.data.userId);
          localStorage.setItem('userRole', response.data.role);
          dispatch({ type: "userLoggedIn" });
          notify("success", "Logged in Successfully! Redirecting to home page");
        })
        .then((response) => {
          const cartResponse = axios.get(`${BASE_API_URL}/user/cart`, {
            withCredentials: true,
          });
          if (cartResponse.data) {
            dispatch({
              type: "updateCart",
              payload: cartResponse.data,
            });
          }
          setTimeout(() => navigate("/"), 2000);
        })
        .catch((error) => {
          notify(
            "error",
            "Couldn't login please check credentials and try again!"
          );
        });
    }
  };

  const notify = (type, message) => {
    switch (type) {
      case "success":
        return toast.success(message);
      case "error":
        return toast.error(message);
      case "default":
        return toast("No response from backend, Please try again!");
    }
  };

  return (
    <div className="authpage">
      <ToastContainer />
      <div className="button-container">
        <button
          id="signInBtn"
          className={activeButton === "signIn" ? "active" : ""}
          onClick={() => handleButtonClick("signIn")}
        >
          Sign In
        </button>
        <button
          id="signUpBtn"
          className={activeButton === "signUp" ? "active" : ""}
          onClick={() => handleButtonClick("signUp")}
        >
          Sign Up
        </button>
        <div
          className="slider"
          style={{
            left: activeButton === "signIn" ? "0" : "50%",
          }}
        />
      </div>

      <div
        className={`signup ${
          activeButton === "signUp" ? "active" : "inactive"
        }`}
      >
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="name">
            {" "}
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label htmlFor="signup-email">
            {" "}
            Email
            <input type="email" name="email" id="signup-email" />
          </label>
          <label htmlFor="signup-mobilenumber">
            {" "}
            Mobile
            <input
              type="number"
              name="mobilenumber"
              id="signup-mobilenumber"
              maxLength={10}
              minLength={10}
            />
          </label>
          <label htmlFor="roles">
            {" "}
            Role
            <select name="role" id="roles">
              <option value="user">User</option>
              <option value="vendor">Vendor</option>
            </select>
          </label>
          <label htmlFor="signup-password">
            {" "}
            Password
            <input
              type="password"
              name="password"
              id="signup-password"
              minLength={8}
            />
          </label>
          <button type="submit" className="signbtn">
            Sign Up
          </button>
        </form>
      </div>
      <div
        className={`signin ${
          activeButton === "signIn" ? "active" : "inactive"
        }`}
      >
        <form className="form" onSubmit={submitHandler}>
          <label htmlFor="signin-email">
            {" "}
            Email
            <input type="email" name="email" id="signin-email" />
          </label>
          <label htmlFor="signin-password">
            {" "}
            Password
            <input
              type="password"
              name="password"
              id="signin-password"
              minLength={8}
            />
          </label>
          <button type="submit" className="signbtn">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
export default Authpage;
