import { RestrauntCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  //state variable
  const [listofRestaurant, setListOfRestaurant] = useState([]); //State Variable
  const [filteredRestaurant, setFilteredRestaurant] = useState([]); //State Variable
  const [searchText, setSearchText] = useState("Search Me");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    const restList =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurant(restList);
    setFilteredRestaurant(restList);
  };

  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="searchBox"
            name="search here"
            type="text"
            input={searchText}
            onChange={(e) => {
              setSearchText(e?.target?.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              console.log(searchText);
              if (searchText.length === 0) {
                setFilteredRestaurant(listofRestaurant);
              }
              const filterResult = listofRestaurant.filter((res) => {
                console.log(res?.info?.name);
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filterResult);
              setFilteredRestaurant(filterResult);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterResult = listofRestaurant.filter(
              (s) => s?.info?.avgRating > 4
            );
            setFilteredRestaurant(filterResult);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restData) => (
          <RestrauntCard restData={restData} key={restData?.info?.id} />
        ))}
      </div>
    </div>
  );
};

export { Body };
