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
      <div className="mx-1 my-2 p-2 border border-solid border-block w-[280px] h-[462px] hover: bg-gray-400">
        <img className="rounded-lg h-45" src={IMG + cloudinaryImageId} alt="" />
        <h1 className="font-bold text-lg py-1" >{name}</h1>
        <h3 className="text-sm py-1">{cuisines.join(", ")}</h3>
        <h4 className="text-sm py-1">{avgRating} Stars</h4>
        <h4 className="text-sm py-1">{costForTwo}</h4>
        <h4 className="text-sm py-1">{deliveryTime} minutes</h4>
      </div>
    </>
  );
};

export default Cards;
