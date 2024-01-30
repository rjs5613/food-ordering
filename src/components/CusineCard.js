import { CDN_URL } from "../utils/constants";

const CusineCard = (props) => {
  let { imageId, accessibility } = props.cuisineData;
  return (
    <div className="cuisine-card">
      <img
        className="cuisine-logo"
        alt={accessibility.altText}
        src={CDN_URL + imageId}
      />
    </div>
  );
};

export default CusineCard;
