import { CDN_URL } from "../utils/constants";

const RestrauntCard = ({ restData, isCompact }) => {
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    sla,
    cloudinaryImageId,
  } = restData?.info; //js distructuring

  if (isCompact) {
    return (
      <div className="top-res-card">
        <img
          className="top-res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} Minutes</h4>
      </div>
    );
  }

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

export default RestrauntCard;
