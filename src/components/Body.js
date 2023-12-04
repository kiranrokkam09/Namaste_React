import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState([]);
  const [filteredlist, setfilteredList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/visakhapatnam/restaurants?place_name=Visakhapatnam&dishv2_id=9055&category=1&location=&isMobile=0"
    );
    const json = await data.json();
    setrestaurantList(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    setfilteredList(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
  };

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
      {console.log(filteredlist)};
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
