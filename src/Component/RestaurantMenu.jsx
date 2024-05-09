import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const cardInfo = resInfo?.cards[2]?.card?.card?.info;

  const { name, cuisines, costForTwoMessage } = cardInfo || {};

  const cardGroup =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const { itemCards } = cardGroup || {};

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>c.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log(categories);

  // need to check d
  

  return resInfo == null ? (
    <Shimmer />
  ) : ( 
    <>
      <div className="text-center">
        <h2 className="font-bold text-2xl my-4">{name}</h2>
        <p>{cuisines.join(",")} - {costForTwoMessage} </p>
        
        {
          categories.map((category)=> (
          <RestaurantCategory data={category?.card?.card}/>
        ))
        }
      </div>
    </>
  );
};

export default RestaurantMenu;
