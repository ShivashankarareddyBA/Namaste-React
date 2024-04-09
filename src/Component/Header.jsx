import { LOGO } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
