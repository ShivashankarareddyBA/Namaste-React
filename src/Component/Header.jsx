import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header = () => {
  const [logButton, setLogButton] = useState("Login");
  return (
    <>
      <div className="header">
        <img className="header-img" src={LOGO} alt="" />
        <div className="header-menu">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
            <li>CART</li>
            <button
              className="logbtn"
              onClick={() => {
                logButton === "Login"
                  ? setLogButton("Logout")
                  : setLogButton("Login");
              }}
            >
              {logButton}
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
