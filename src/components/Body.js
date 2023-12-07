import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredlist, setfilteredList] = useState([]);
  const restaurantList = useRestaurantList();
  useEffect(() => {
    setfilteredList(restaurantList);
  }, [restaurantList]);
  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false) {
    return <h1>Looks like you're offline!! Check Your Internet Connection.</h1>;
  }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters-box">
        <input
          className="searchbox"
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          className="searchbutton"
          onClick={() => {
            const searchlist = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchInput.toLowerCase())
            );
            setfilteredList(searchlist);
          }}
        >
          Search
        </button>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredlist.map((restaurant) => {
          const url = restaurant?.cardAction?.clickUrl.split("/")[2];
          return (
            <Link to={"/restaurants/" + url} key={restaurant.info.resId}>
              <RestaurantCard resdata={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
