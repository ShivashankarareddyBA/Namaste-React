
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
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
        <img className="rounded-lg h-50" src={IMG + cloudinaryImageId} alt="" />
        <h1 className="font-bold text-lg py-1" >{name}</h1>
        <h3 className="text-sm py-1">{cuisines.join(", ")}</h3>
        <h4 className="text-sm py-1">{avgRating} Stars</h4>
        <h4 className="text-sm py-1">{costForTwo}</h4>
        <h4 className="text-sm py-1">{deliveryTime} minutes</h4>
      </div>
    </>
  );
};

export const promotedLable= (Cards) =>
{
  return (props)=>{
    return(
      <>
      <label className="absolute bg-black text-white m-1 p-1 rounded-lg">Pramoted</label>
      <Cards {...props}/>
      </>
    )
  }
}

export default Cards;
