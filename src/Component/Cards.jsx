import { IMG } from "../utils/constants";

const Cards = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime } = {},
  } = resData?.info || {};

  console.log(resData);
  return (
    <>
      <div className="res-card">
        <img className="res-img" src={IMG + cloudinaryImageId} alt="" />
        <h1>{name}</h1>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
      </div>
    </>
  );
};

export default Cards;
