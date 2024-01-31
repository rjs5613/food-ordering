import RestaurantFilters from "./RestaurantFilters";
import RestrauntCard from "./RestaurantCard";
import { useEffect } from "react";

import { useRef } from "react";

const AllRestaurant = ({
  listOfAllRestaurant,
  paginationDetails,
  updateAllResFn,
}) => {
  if (listOfAllRestaurant.length === 0) {
    return <AllResShimmer />;
  }
  const resContainerDiv = useRef(null);

  const fetchNextPageData = () => {
    const apiUrl = "https://www.swiggy.com/dapi/restaurants/list/update";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Origin: "https://www.swiggy.com",
      },
      body: JSON.stringify(paginationDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("API Call Failed: ", response);
        }
        return response.json();
      })
      .then((newData) => {
        console.log("New User Data:", newData);
        updateAllResFn(newData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPageData();
        }
      },
      { threshold: 0.8 }
    );

    observer.observe(resContainerDiv.current);

    return () => {
      observer.disconnect();
    };
  }, [resContainerDiv]);

  return (
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
  );
};

export default AllRestaurant;

const AllResShimmer = () => {
  return (
    <div className="res-section">
      <hr />
      <h2 style={{ color: "white" }}>.....</h2>
      <div className="res-container">
        <div className="res-shimmer-card" />
        <div className="res-shimmer-card" />
        <div className="res-shimmer-card" />
        <div className="res-shimmer-card" />
        <div className="res-shimmer-card" />
        <div className="res-shimmer-card" />
        <div className="res-shimmer-card" />
      </div>
    </div>
  );
};
