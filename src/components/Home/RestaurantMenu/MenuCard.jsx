import React from "react";
import FormatPrice from "../../../Helper/FormatPrice";
import { IMG_CDN_URL } from "../../../constant";
import { addItem } from "../../../utils/cartSlice.js";
import { useDispatch } from "react-redux";

const MenuCard = ({ item }) => {
  const { id, name, description, price, imageId } = item;

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
   

    dispatch(addItem(item));
  };

  return (
    <div className=" flex justify-evenly items-center basis-[700px] max-h-[180px] p-5 border-b  border-gray mx-28 overflow-hidden  hover:bg-slate-100 rounded-lg  hover:shadow-lg">
      <div className="flex flex-col basis-[600px] mb-5">
        <h2 className="text-lg font-bold text-gray-600">{name}</h2>
        <p>
          <span className="text-gray-600 text-xs mr-2 ">
            <del>
              <FormatPrice price={isNaN(price * 2) ? 500 * 50 : price * 2} />
            </del>
          </span>
          <span className="text-lg font-medium text-gray-600">
          <FormatPrice  price={isNaN(price * 2) ? 500 * 20 : (price * 2) / 2} />
          </span>
          
        </p>
        <p className="text-xs font-thin text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <div className="w-[230px] mb-5 shadow-sm ">
          {imageId && (
            <img
              className="w-full rounded-lg "
              src={IMG_CDN_URL + imageId}
              alt="FoodItemImage"
            />
          )}
        </div>

        <button
          className=" absolute text-blue-950 font-bold bottom-2 shadow-lg mx-[67px] text-sm px-6 py-1 bg-slate-50 rounded-lg"
          onClick={() => {
            addFoodItem(item);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
