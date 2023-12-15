import RestaurantCard, { Restaurantpromoted } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredlist, setfilteredList] = useState([]);
  const restaurantList = useRestaurantList();
  const Promotedrestaurant = Restaurantpromoted(RestaurantCard);
  useEffect(() => {
    setfilteredList(restaurantList);
  }, [restaurantList]);

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>Looks like you're offline!! Check Your Internet Connection.</h1>;
  }

  const { loggeduser, setUserName } = useContext(UserContext);
  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            className=" border border-solid border-black"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            className="m-4 px-4 py-1 bg-green-200 rounded-md"
            onClick={() => {
              const searchlist = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchInput.toLowerCase())
              );
              setfilteredList(searchlist);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className="filter-btn px-4 py-1 bg-gray-200 rounded-md"
            onClick={() => {
              const filteredlist = restaurantList.filter(
                (res) => res.info.rating.aggregate_rating > 4
              );
              setfilteredList(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>UserName : </label>
          <input
            className="border border-black m-2"
            value={loggeduser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredlist.map((restaurant) => {
          const url = restaurant?.cardAction?.clickUrl.split("/")[2];
          return (
            <Link to={"/restaurants/" + url} key={restaurant?.info?.resId}>
              {restaurant.isPromoted ? (
                <Promotedrestaurant resdata={restaurant} />
              ) : (
                <RestaurantCard resdata={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
