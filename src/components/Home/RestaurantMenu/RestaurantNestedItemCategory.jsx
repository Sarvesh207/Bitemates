import React, { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedItemCategory }) => {
  console.log(nestedItemCategory.categories.title, "hii i am working");
  const [isVisible, setIsVisible] = useState(true);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="p-5">
      {/* <div className="flex items-center justify-between  ">
        <h3 className="font-bold text-lg cursor-pointer " onClick={toggleView}>
          {nestedItemCategory.categories.title}
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className="cursor-pointer" />
        ) : (
          <SlArrowDown onClick={toggleView} className="cursor-pointer" />
        )}
      </div>
      {isVisible && (
        <div className="">
          {nestedItemCategory.categories.map((item, index) => (
            <RestaurantItemCategory key={index} itemCategory={item} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default RestaurantNestedItemCategory;
