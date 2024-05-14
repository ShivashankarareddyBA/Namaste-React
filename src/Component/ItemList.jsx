import {IMG} from "../utils/constants"
const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" flex justify-between p-2 m-2  border-gray-200 border-b-2 text-left"
        >
           
          <div className="w-9\12">
          <div className="py-2">
            <span>{item.card.info.name} </span>
            <span>
              - ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : (item.card.info.finalPrice / 100) |
                  (item.card.info.defaultPrice / 100)}
            </span>
          </div>
          <p className="text-xs"> {item.card.info.description}</p>
        
          </div>
          <div className="w-3/12 p-4" >
            <div className="absolute"> 
            <button className=" p-2 mx-4 my-10 rounded-lg bg-slate-200 text-black shadow-lg"> Add +</button>
            </div>
            <img src={IMG + item.card.info.imageId}  className="w-full"/>
            </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
