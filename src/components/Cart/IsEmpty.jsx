import React from "react";
import { Link } from "react-router-dom";
import {BsCartDash } from "react-icons/bs";

const IsEmpty = () => {
  return (
    <div className="flex justify-center items-center flex-col mb-4">
      

      <img
        className="w-full h-full"
        src="https://media.istockphoto.com/id/841884438/vector/empty-shopping-bag-icon-cute-disappointed-shopping-bag-flat-thin-line-design-isolated-vector.jpg?s=612x612&w=0&k=20&c=q4-NaJiL4BG8kIEIsU5N0Wgy_9zv6_dJutV1qfs1_x4="
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
