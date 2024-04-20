import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD", resInfo);
  const cardInfo = resInfo?.cards[2]?.card?.card?.info;
  console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD", resInfo);
  const { name, cuisines, costForTwoMessage } = cardInfo || {};

  const cardGroup =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    console.log("DDDDDDDDDDDDDDDDDDDDDDDDDDDDD", cardGroup);
    
  const { itemCards } = cardGroup || {};
  
// need to check 
  console.log(itemCards);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h2>{name}</h2>
        <h2>{cuisines.join(",")}</h2>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name}- {" Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RestaurantMenu;
