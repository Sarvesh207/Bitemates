import React from "react";
import { useParams } from "react-router-dom";

import Shimmer from "../../Shimmer.jsx";
import useRestaurant from "../../../utils/useRestaurant.js";
import useRestaurantMenu from "../../../utils/useRestaurantMenu.js";
import { addItem } from "../../../utils/cartSlice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { TbBike } from "react-icons/tb";
import { IMG_CDN_URL } from "../../../constant.js";

import FormatPrice from "../../../Helper/FormatPrice.js";
// import MenuCards from "../RestaurantMenu/MenuCards/MenuCards.jsx";

const RestaurantMenu = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  const restaurant = useRestaurant(id);
  const restaurantsMenu = useRestaurantMenu(id);
  console.log(restaurantsMenu);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu flex justify-center items-center  flex-col bg-white py-10">
      <p className="text-gray-600 -ml-80 cursor-pointer my-10">
        <Link className="cursor-pointer" to="/">
          Home
        </Link>
        / {restaurant.name}
      </p>
      <div>
        <h2 className="text-sky-950 font-bold text-2xl">{restaurant.name}</h2>

        <p className="mt-5 text-gray-600">{restaurant.cuisines.join(", ")}</p>

        <p className=" text-gray-600"> {restaurant.areaName}</p>
        <div className="flex justify-start items-center gap-x-2 text-gray-600 mt-2">
          <TbBike />
          <p> {restaurant.feeDetails.message}</p>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mt-3 gap-x-3  ">
            <div className="flex items-center justify-center flex-col border-solid border-2 mb-3  rounded-xl bg-slate-50 border-gray-400 py-2 rounded-sm">
              <p className="font-ProximaNova text-sm font-bold text-gray-600 ">
                40% UPTO <FormatPrice price={80 * 80 * 2} />{" "}
              </p>
              <p className="font-ProximaNova text-xs font-bold text-gray-400">
                USE TRYNEW | ABOVE <FormatPrice price={150 * 150} />
              </p>
            </div>
            <div className="flex items-center justify-center flex-col border-solid border-2 rounded-xl  mb-3 bg-slate-50 border-gray-400 py-2 rounded-sm">
              <p className="font-ProximaNova text-sm font-bold text-gray-600 ">
                FLAT <FormatPrice price={100 * 100} /> OFF
              </p>
              <p className="font-ProximaNova text-xs font-bold text-gray-400">
                USE FLATDEAL| ABOVE <FormatPrice price={100 * 100 * 5} />
              </p>
            </div>
            <div className="flex items-center justify-center flex-col border-solid border-2 rounded-xl  mb-3  bg-slate-50 border-gray-400 py-2 rounded-sm">
              <p className="font-ProximaNova text-sm font-bold text-gray-600 ">
                FLAT 15% OFF
              </p>
              <p className="font-ProximaNova text-xs font-bold text-gray-400">
                USE PARTY | ABOVE <FormatPrice price={100 * 100 * 9} />
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-gray-600">{restaurant.avgRating} Stars</h3>
        <h3 className="text-gray-600">{restaurant.costForTwoMessage}</h3>
        <div>
          <span>{restaurant.slaString}</span>
          <span>{restaurant.costForTwoString}</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white">
        {restaurantsMenu.map((item) => {
          return (
            <div className="hover:shadow-2xl p-3 cursor-pointer transition duration-300 ease-in-out hover:scale-100">
              <img
                className="rounded-lg "
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt=""
              />
              
              <p className="text-black text-sm my-3 font-bold">{item?.card?.info?.name}</p>
              <p className=" text-gray-600 text-xs">{item?.card?.info?.category}</p>
              <div className="flex justify-between items-center mt-5">
                  <h3>
                    <span className="text-gray-600 text-sm mr-2">
                      <del>
                      
                        <FormatPrice price={isNaN(item?.card?.info?.price * 2) ? 500*50 : item?.card?.info?.price * 2} />
                      </del>
                    </span>
                    <FormatPrice price={isNaN(item?.card?.info?.price * 2) ? 500*20 : item?.card?.info?.price * 2} />
                  </h3>

                  <button
                    className="px-3 py-1 transition ease-in duration-200 rounded-xl hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                    onClick={() => addFoodItem(item)}
                  >
                    Add
                  </button>
                </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
