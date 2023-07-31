import React, { useState } from "react";
import MenuCard from "./MenuCard";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory }) => {
  const [isVisible, setIsVisible] = useState(true);
  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="">
      <div className="flex justify-around items-center px-5 mx-5 ">
        <h1 className="text-blue-950 text-lg text-center mr-5">
          {itemCategory?.title} <span>({itemCategory?.itemCards.length})</span>
        </h1>
        <div className="ml-8">
          {isVisible ? (
            <SlArrowUp onClick={toggleView} className="cursor-pointer" />
          ) : (
            <SlArrowDown onClick={toggleView} className="cursor-pointer" />
          )}
        </div>
      </div>

      {isVisible && (
        <div className="overflow-hidden">
          {itemCategory?.itemCards.map((item) => {
            return (
              <MenuCard key={item?.card?.info?.id} item={item?.card?.info} />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory;
