import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data, showItems, SetShowIndex }) => {
  const HandleClick = () => {
    SetShowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/*Header*/}
      <div
        className="flex justify-between cursor-pointer"
        onClick={HandleClick}
      >
        <span className="font-bold text-lg">
          {data?.menu?.name} (
          {data?.menu?.categories[0]?.category?.items.length})
        </span>
        <span>⬇️</span>
      </div>
      {/*Body*/}
      {showItems && (
        <ItemList items={data?.menu?.categories[0]?.category?.items} />
      )}
    </div>
  );
};

export default RestaurantCategory;
