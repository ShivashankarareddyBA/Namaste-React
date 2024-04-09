import Cards from "./Cards";
import resList from "../utils/mockData";

const Body = () => {
  console.log(resList);
  return (

    <>
      <div className="search">
        <label>Search</label>
        <input type="text" id="text" />
        <button>Search</button>
      </div>
      <div className="restoruants">
        {resList.map((rescard) => (
          <Cards key={rescard.info.id} resData={rescard} />
        ))}
      </div>
    </>
  );
};

export default Body;
