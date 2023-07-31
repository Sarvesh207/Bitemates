import React from "react";
import RestaurantItemCategory from "./RestaurantItemCategory";
import RestaurantNestedItemCategory from "./RestaurantNestedItemCategory";

const RestaurantMenuList = ({ menu }) => {
  return (
    <div>
      {menu.map((item, index) => (
        <div key={index}>
          {!item?.categories && <RestaurantItemCategory itemCategory={item} />}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuList;
