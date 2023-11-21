import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnname, setBtnName] = useState("login");
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navlinks">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="button"
            onClick={() => {
              btnname === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
