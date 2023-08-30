import React from 'react'
import FormatPrice from "../../../Helper/FormatPrice.js";
import { TbBike } from "react-icons/tb";

const RestauranrInfo = (restaurant) => {
    
  return (
    <div className="px-3">
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
  )
}

export default RestauranrInfo