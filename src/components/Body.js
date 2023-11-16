import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setrestaurantList] = useState(resList);
  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredlist = restaurantList.filter(
            (res) => res.card.card.info.avgRating > 4
          );
          console.log(filteredlist);
          setrestaurantList(filteredlist);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resdata={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
