import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ restData }) => {
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = restData?.info; //js distructuring

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Minutes</h4>
    </div>
  );
};

export { RestrauntCard };
