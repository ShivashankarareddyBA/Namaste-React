import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

   const cardInfo = resInfo?.cards[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = cardInfo || {};

  const cardGroup =
    resInfo?.cards?. card?.card?.groupedCard?.cardGroupMap?.REGULAR?.cards?.card[1]?.card?.itemCards;
  const { itemCards } = cardGroup || {};

  console.log(itemCards);

  return resInfo == null ? (
    <Shimmer />
  ) : (
    <>
      <div className="menu">
        <h1>{name}</h1>
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
