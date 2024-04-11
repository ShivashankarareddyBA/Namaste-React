import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1154662&lng=77.6069977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const topBrands = json?.data?.cards.find(
      (data) => data?.card?.card?.id == "top_brands_for_you"
    );
    setListOfRestaurants(
      topBrands.card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if(listOfRestaurants == 0){
    return <Shimmer/>
  }

  return (
    <>
      <div className="search">
        <label>Search</label>
        <input type="text" />
        <button>Search</button>
      </div>
      <button onClick={filterTopRestaurants}>Top Restaurants</button>

      <div className="restaurants">
        {listOfRestaurants.map((rescard) => (
          <Cards key={rescard.info.id} resData={rescard} />
        ))}
      </div>
    </>
  );
};

export default Body;
