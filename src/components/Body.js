import { RestrauntCard } from "./RestaurantCard";
import { useState, useEffect, useRef } from "react";
import { Shimmer } from "./Shimmer";
import CusineCard from "./CusineCard";
import RestaurantFilters from "./RestaurantFilters";

const Body = () => {
  const [listOfTopRestaurant, setListOfTopRestaurant] = useState([]);
  const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);

  const resContainerDiv = useRef(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    const restList = jsonData?.data?.cards[1]?.card;
    setListOfTopRestaurant(restList);

    const cuisineList = jsonData?.data?.cards[0]?.card;
    setCuisineList(cuisineList);

    const listOfAllRestaurant =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants;
    setListOfAllRestaurant(listOfAllRestaurant);
  };

  if (listOfTopRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
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
      <div className="top-res-section">
        <hr />
        <h2>{listOfTopRestaurant.card.header.title}</h2>
        <div className="top-res-container" ref={resContainerDiv}>
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
      <div className="res-section">
        <hr />
        <h2>Restaurants with online food delivery in Pune</h2>
        <RestaurantFilters />
        <div className="res-container" ref={resContainerDiv}>
          {listOfAllRestaurant.map((restData) => (
            <RestrauntCard restData={restData} key={restData?.info?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Body };
