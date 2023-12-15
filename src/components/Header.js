import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  const [btnname, setBtnName] = useState("login");
  const onlinestatus = useOnlineStatus();
  const { loggeduser } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-pink-100 mb-4 shadow-lg">
      <div className="w-28">
        <img className="ml-4" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className=" px-4">Online Status:{onlinestatus ? "🟢" : "🔴"}</li>
          <li className=" px-4">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className=" px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className=" px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className=" px-4">Cart</li>
          <button
            className=" px-4"
            onClick={() => {
              btnname === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnname}
          </button>
          <li className="font-bold">{loggeduser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
