const RestaurantCard = (props) => {
  const { resdata } = props;
  const { image, cuisine, name, rating, cft } = resdata?.info;
  const { deliveryTime } = resdata?.order;
  const clist = cuisine.map((item) => {
    return item.name;
  });
  return (
    <div className="m-4 p-4 w-[250px] rounded-md overflow-hidden bg-gray-100 hover:bg-gray-300">
      <img className=" rounded-md h-48 w-60" alt="res-logo" src={image.url} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="max-w-full overflow-hidden whitespace-normal">
        {clist.join(", ")}
      </h4>
      <h4>{rating.aggregate_rating + " Stars"}</h4>
      <h4>{cft.text}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export const Restaurantpromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
