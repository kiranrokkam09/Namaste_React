import { useEffect, useState } from "react";
import { Res_URL } from "../utils/constants";

const useRestaurantMenu = (resname) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(Res_URL + resname + "/order");
    const json = await data.json();
    setResData(json.page_data);
  };
  return resData;
};

export default useRestaurantMenu;
