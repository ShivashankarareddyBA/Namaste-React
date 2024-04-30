import Cards from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const filterTopRestaurants = () => {
    const filteredList = listOfRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurant(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1154662&lng=77.6069977&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //Optinal chaining
    const topBrands = json?.data?.cards.find(
      (data) => data?.card?.card?.id == "top_brands_for_you"
    );
    setListOfRestaurants(
      topBrands.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      topBrands.card.card.gridElements.infoWithStyle.restaurants
    );
  };
  //conditional rendering
  // if(listOfRestaurants.length == 0){
  //   return <Shimmer/> below is ternary operation also a same
  // }

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>Looks like you're offline! Please check your connection</h1>;
  }



  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search m-4 p-4">
        <label>Search</label>
        <input
          type="text"
          className="border border-solid border-black"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="px-4 py-4 bg-green-200 m-4 rounded-lg"
          onClick={() => {
            //filter the restraunt card and update the UI
            //serchText

            const filteredRestaurant = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
      </div>
      <button  className= "px-4 py-4 bg-green-200 m-4 rounded-lg" onClick={filterTopRestaurants}>Top Restaurants</button>
      <div className="restaurants">
        {filteredRestaurant.map((rescard) => (
          <Link key={rescard.info.id} to={"restaurants/" + rescard.info.id}>
            <Cards resData={rescard} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
