import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnname, setBtnName] = useState("login");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logocontainer">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="navlinks">
        <ul>
          <li>Online Status:{onlinestatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
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
