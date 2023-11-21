import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resdata } = props;
  const { image, name, rating, cft } = resdata?.info;
  return (
    <div className="res-card">
      <img className="res-logo" alt="res-logo" src={image.url} />
      <h3>{name}</h3>
      <h4>{rating.aggregate_rating + " Stars"}</h4>
      <h4>{cft.text}</h4>
    </div>
  );
};

export default RestaurantCard;
