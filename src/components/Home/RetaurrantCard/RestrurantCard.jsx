import { IMG_CDN_URL } from "../../../constant.js";
import { AiFillStar } from "react-icons/ai";

import React from "react";

const RestruantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
  costForTwoString,
  avgRating,
  slaString,
}) => {
  return (
    <div className="w-[300px]  p-5 m-10   bg-white group-hover:opacity-100 lg:h-80 hover:shadow-2xl hover:lg:h-80 transition duration-300 ease-in-out hover:scale-110 hover:border-gray-950">
      <div className="overflow-hidden  max-w-sm">
        <img className="w-full" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="">
        <h2
          className=" text-base font-ProximaNova my-2
        "
        >
          {name}
        </h2>
        <p className="text-xs text-gray-600 font-arial my-2 ">{cuisines.join(", ")}</p>
        
        <div className="flex justify-between my-3">
          <div className="flex justify-evenly mx-1 bg-green-600 text-white p-1 ">
            <span className="text-xs">{avgRating}</span>
            <span>
              <AiFillStar />
            </span>
          </div>

          <span className="text-xs text-gray-600">{slaString}</span>
          <span className="text-xs mx-1 text-gray-600">{costForTwoString}</span>
        </div>
      </div>
    </div>
  );
};
export default RestruantCard;
