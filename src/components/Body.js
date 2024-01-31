import { useState, useEffect, useRef } from "react";
import CuisineContainer from "./CuisineContainer";
import TopRestaurants from "./TopRestaurant";
import AllRestaurant from "./AllRestaurant";
import { getNextPageDetails } from "../utils/utility";

const Body = () => {
  const [listOfTopRestaurant, setListOfTopRestaurant] = useState([]);
  const [listOfAllRestaurant, setListOfAllRestaurant] = useState([]);
  const [cuisineList, setCuisineList] = useState([]);
  const nextPageDetails = useRef({});

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

    updateAllResData(jsonData);
  };

  const updateAllResData = (jsonData) => {
    const listOfAllRestaurant =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants;
    setListOfAllRestaurant(listOfAllRestaurant);
    nextPageDetails.current = getNextPageDetails(jsonData);
  };

  const updateAllRestaurant = (jsonData) => {
    const newList =
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        .restaurants;
    setListOfAllRestaurant([...listOfAllRestaurant, ...newList]);
    nextPageDetails.current = getNextPageDetails(jsonData);
  };

  return (
    <div className="body">
      <CuisineContainer cuisineList={cuisineList} />
      <TopRestaurants listOfTopRestaurant={listOfTopRestaurant} />
      <AllRestaurant
        listOfAllRestaurant={listOfAllRestaurant}
        paginationDetails={nextPageDetails.current}
        updateAllResFn={updateAllRestaurant}
      />
    </div>
  );
};

export default Body;
