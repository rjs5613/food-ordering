export const getNextPageDetails = (responseJson) => {
  let details = {
    nextOffset: responseJson?.data?.pageOffset?.nextOffset,
    widgetOffset: responseJson?.data?.pageOffset?.widgetOffset,
    _csrf: responseJson?.csrfToken,
    page_type: "DESKTOP_WEB_LISTING",
    lat: 18.5204303,
    lng: 73.8567437,
    seoParams: {
      seoUrl: "https://www.swiggy.com/",
      pageType: "FOOD_HOMEPAGE",
      apiName: "FoodHomePage",
    },
  };
  console.log(details);
  return details;
};
