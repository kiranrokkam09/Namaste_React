import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(0);

  const { resname } = useParams();

  const resData = useRestaurantMenu(resname);

  if (resData === null) {
    return <Shimmer />;
  }

  const { name, cuisine_string, resUrl } =
    resData?.sections?.SECTION_BASIC_INFO;
  const { items } =
    resData?.order?.menuList?.menus[0]?.menu?.categories[0]?.category;
  const categories = resData?.order?.menuList?.menus;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-base">{cuisine_string}</h3>
      <h1>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.menu?.id}
            data={category}
            showItems={index === showIndex ? true : false}
            SetShowIndex={() => {
              if (showIndex == index) {
                return setShowIndex(null);
              }
              return setShowIndex(index);
            }}
          />
        ))}
      </h1>
    </div>
  );
};

export default RestaurantMenu;
