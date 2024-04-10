import Cards from "./Cards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filteredResList, setFilteredResList] = useState(resList);

  const filterTopRestaurants = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredResList(filteredList);
  };

  return (
    <>
      <div className="search">
        <label>Search</label>
        <input type="text" id="text" />
        <button>Search</button>
      </div>
      <button onClick={filterTopRestaurants}>Top Restaurants</button>

      <div className="restaurants">
        {filteredResList.map((rescard) => (
          <Cards key={rescard.info.id} resData={rescard} />
        ))}
      </div>
    </>
  );
};

export default Body;
