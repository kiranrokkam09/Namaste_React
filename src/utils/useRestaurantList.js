import { useEffect, useState } from "react";
import { Rest_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantList, setrestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Rest_URL);
    const json = await data.json();
    setrestaurantList(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
  };
  return restaurantList;
};

export default useRestaurantList;
