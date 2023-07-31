import React from "react";
import { Link } from "react-router-dom";
import {BsCartDash } from "react-icons/bs";

const IsEmpty = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-4">
      

      <img
      
        className="w-full mt-4 mb-4 h-full"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
        alt="emptycard_image"
      />

      <p className="text-gray-400 font-semibold">
      You can go to home page to view more restaurants
      </p>
      <p className="text-gray-400 mb-3 font-semibold">
        Go ahead & explore top restrauants
      </p>
      <Link
        to="/"
        className="font-medium rounded-lg text-lg px-4 text-slate-600 mx-3 border  py-2 shadow-md hover:bg-slate-50"
      >
        SEE RESTAURANTS NEAR YOU 
      </Link>
    </div>
  );
};

export default IsEmpty;
