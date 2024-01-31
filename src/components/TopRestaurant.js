import RestrauntCard from "./RestaurantCard";

const TopRestaurants = ({ listOfTopRestaurant }) => {
  if (listOfTopRestaurant.length === 0) {
    return <TopResShimmer />;
  }
  return (
    <div className="top-res-section">
      <hr />
      <h2>{listOfTopRestaurant.card.header.title}</h2>
      <div className="top-res-container">
        {listOfTopRestaurant?.card?.gridElements?.infoWithStyle?.restaurants.map(
          (restData) => (
            <RestrauntCard
              isCompact={true}
              restData={restData}
              key={restData?.info?.id}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopRestaurants;

const TopResShimmer = () => {
  return (
    <div className="top-res-section">
      <hr />
      <h2 style={{ color: "white" }}>.....</h2>
      <div className="top-res-container">
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
        <div className="top-res-shimmer-card" />
      </div>
    </div>
  );
};
