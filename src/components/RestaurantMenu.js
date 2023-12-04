import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Res_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);

  const { resname } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(Res_URL + resname + "/order");
    const json = await data.json();
    setResData(json.page_data);
  };

  if (resData === null) {
    return <Shimmer />;
  }

  const { name, cuisine_string, resUrl } =
    resData?.sections?.SECTION_BASIC_INFO;
  const { items } =
    resData?.order?.menuList?.menus[0]?.menu?.categories[0]?.category;

  return (
    <div id="menu">
      <h1>{name}</h1>
      <h3>{cuisine_string}</h3>
      <h2>Menu</h2>
      <ul>
        {items.map((i) => (
          <li key={i.item.id}>
            {i.item.name} - {"Rs. "}
            {i.item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
