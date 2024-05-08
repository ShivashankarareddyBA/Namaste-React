import Cards, {promotedLable}from "./Cards";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const RestaurantCardPromoted = promotedLable(Cards);

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
      <div className="flex justify-between items-center m-4 p-4 ml-[220px] mr-[220]">

        <label className="text-blue-500 " >Search</label>
        <input 
          type="text"
          className="border border-solid border-black w-[600px] h-7 rounded-lg" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className=" flex items-center h-7 bg-blue-500 hover:bg-blue-700 text-white py-2 px-3 rounded-lg "
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
        <button className=" flex items-center h-7 m-2 ml-15 bg-blue-400 hover:bg-blue-700
         text-white py-2 px-3 rounded-lg"  onClick={filterTopRestaurants}>Top Restaurants</button>
      </div>
      
      <div className="flex flex-wrap justify-between mx-20 ">
        {filteredRestaurant.map((rescard) => (
          <Link key={rescard.info.id} to={"restaurants/" + rescard.info.id}>
            { rescard.info.promoted ?(
              <RestaurantCardPromoted resData={rescard} /> ): (
            <Cards resData={rescard} />)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
