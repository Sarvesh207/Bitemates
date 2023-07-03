import React from "react";


const Carousal = ({ image }) => {
  return (
    <div className="  w-60">
      <img
        className=" "
        src={image}
        alt="Img"
      />
    </div>
  );
};

export default Carousal;
