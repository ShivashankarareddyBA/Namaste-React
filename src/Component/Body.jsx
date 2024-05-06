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

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you're offline!! Please check your internet connection;
      </h1>
    );



  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="  m-4 p-4">

        <label>Search</label>
        <input 
          type="text"
          className=" m-2 boshadow appearance-none border rounded w-[500px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className=" bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded p-3"
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
        <button className="m-2  bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded p-3"  onClick={filterTopRestaurants}>Top Restaurants</button>
      </div>
      
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
