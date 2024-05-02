import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logButton, setLogButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <>
      <div className= "flex justify-between bg-pink-100 shadow-lg mb-2">
        <img className="w-20" src={LOGO} alt="" />
        <div className="flex items-center">
          <ul className="flex m-4 p-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li> 
            <li className="px-4">
              <Link to="/">HOME </Link>
            </li>
            <li className="px-4">
              <Link to="/about"> ABOUT</Link>
            </li>
            <li className="px-4">
              <Link to="/contact">CONTACT</Link>{" "}
            </li>
            <li className="px-4">CART</li>
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
