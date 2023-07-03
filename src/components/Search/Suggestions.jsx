import React from "react";
import { IMG_CDN_URL } from "../../constant";

const Suggestions = ({ suggestion }) => {
  console.log(suggestion);
  return (
    <div className=" flex items-center sm:mx-20 md:mx-40  lg:mx-60  mt-6 rounded-lg hover:bg-slate-100 ">
      <div>
        <img
          className="w-32 rounded-lg "
          src={IMG_CDN_URL + suggestion?.cloudinaryId}
          alt="img"
        />
      </div>

      <div className="px-6">
        <span className="">
          <p className=" text-sm">{suggestion?.text}</p>
        </span>
        <p className="text-xs text-gray-500">{suggestion?.subCategory}</p>
      </div>
    </div>
  );
};

export default Suggestions;
