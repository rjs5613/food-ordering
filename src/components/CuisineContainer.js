import CusineCard from "./CusineCard";

const CuisineContainer = ({ cuisineList }) => {
  if (cuisineList.length === 0) {
    return <CuisineShimmer />;
  }
  return (
    <div className="cuisine-section">
      <h2>{cuisineList.card.header.title}</h2>
      <div className="cuisine-container">
        {cuisineList?.card?.gridElements?.infoWithStyle?.info.map(
          (cuisineData) => (
            <CusineCard cuisineData={cuisineData} key={cuisineData.id} />
          )
        )}
      </div>
    </div>
  );
};

export default CuisineContainer;

const CuisineShimmer = () => {
  return (
    <div className="cuisine-section">
      <h2 style={{ color: "white" }}>.....</h2>
      <div className="cuisine-container">
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
        <div className="cuisine-shimmer-card" />
      </div>
    </div>
  );
};
