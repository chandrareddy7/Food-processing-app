import { useState } from "react";
import "./Authpage.css";

const Authpage = () => {
  const [activeButton, setActiveButton] = useState("signUp");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="authpage">
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
        <form>
          <label htmlFor="firstname">
            {" "}
            First Name
            <input type="text" name="firstname" id="firstname" />
          </label>
          <label htmlFor="lastname">
            {" "}
            Last Name
            <input type="text" name="lastname" id="lastname" />
          </label>
          <label htmlFor="email">
            {" "}
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="mobilenumber">
            {" "}
            Mobile
            <input
              type="number"
              name="mobilenumber"
              id="mobilenumber"
              maxLength={10}
              minLength={10}
            />
          </label>
          <label htmlFor="password">
            {" "}
            Password
            <input
              type="password"
              name="password"
              id="password"
              minLength={8}
            />
          </label>
          <button type="submit" className="signbtn">Sign Up</button>
        </form>
      </div>
      <div
        className={`signin ${
          activeButton === "signIn" ? "active" : "inactive"
        }`}
      >
        <form>
          <label htmlFor="email">
            {" "}
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label htmlFor="mobilenumber">
            Mobile
            <input
              type="number"
              name="mobilenumber"
              id="mobilenumber"
              maxLength={10}
              minLength={10}
            />
          </label>
          <label htmlFor="password">
            {" "}
            Password
            <input
              type="password"
              name="password"
              id="password"
              minLength={8}
            />
          </label>
          <button type="submit" className="signbtn">Sign In</button>
        </form>
      </div>
    </div>
  );
};
export default Authpage;
