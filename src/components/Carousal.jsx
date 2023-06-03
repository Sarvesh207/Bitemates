import React from "react";
import { IMG_CDN_URL } from "../constant.js";

const Carousal = ({ creativeId }) => {
  return (
    <div className="flex justify-between mx-5 ">
      <img
        className="gap-x-3 h-full object-scale-down "
        src={IMG_CDN_URL + creativeId}
        alt=""
      />
    </div>
  );
};

export default Carousal;
