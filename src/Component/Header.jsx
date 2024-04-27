import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [logButton, setLogButton] = useState("Login");
  return (
    <>
      <div className="header">
        <img className="header-img" src={LOGO} alt="" />
        <div className="header-menu">
          <ul>
            <li>
              <Link to="/">HOME </Link>
            </li>
            <li>
              <Link to="/">HOME </Link>
            </li>
            <li>
              <Link to="/about"> ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>{" "}
            </li>
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
