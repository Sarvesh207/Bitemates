import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setDeliveryTimeFilter,
  setPriceHightoLowFilter,
  setPriceLowtoHighFilter,
  setRatingFilter,
  setIdFilter,
} from "../../../utils/filterSlice.js";

const FilterNavbar = () => {
  const dispatch = useDispatch();
  const restrauntsList = useSelector((store) => store.filter.restraunts);
  

  const handlleSortDelivery = () => {
    dispatch(setDeliveryTimeFilter(restrauntsList));
  };
  const handlleSortRating = () => {
    dispatch(setRatingFilter(restrauntsList));
  };
  const handlleSortLowtoHigh = () => {
    dispatch(setPriceLowtoHighFilter(restrauntsList));
  };
  const handlleSortHightoLow = () => {
    dispatch(setPriceHightoLowFilter(restrauntsList));
  };
  const handlleSortRevelence = () => {
    dispatch(setIdFilter(restrauntsList));
  };

  return (
    <div className="flex justify-end sm:mx-10 xl:mx-40 gap-8 mt-8 text-gray-500 mb-2 ">
      <button
        className=" hover:text-gray-600 active:text-blue-950  focus:text-slate-900 "
        onClick={handlleSortRevelence}
      >
        Revelence
      </button>
      <button
        className=" hover:text-gray-600   active:text-blue-950  focus:text-slate-900 "
        onClick={handlleSortDelivery}
      >
        Delivery Time
      </button>
      <button
        className=" hover:text-gray-600  active:text-blue-950  focus:text-slate-900"
        onClick={handlleSortRating}
      >
        Rating
      </button>
      <button
        className=" hover:text-gray-600  active:text-blue-950  focus:text-slate-900"
        onClick={handlleSortLowtoHigh}
      >
        Cost: Low To High
      </button>
      <button
        className=" hover:text-gray-800  active:text-blue-950  focus:text-slate-900"
        onClick={handlleSortHightoLow}
      >
        Cost: High To Low
      </button>
      <button className="font-bold flex items-center text-slate-600">
        Filters
        <span className="pl-3 ">
          <img
            className="w-6 "
            src="data:image/png;base64,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"
            alt=""
          />
        </span>
      </button>
    </div>
  );
};

export default FilterNavbar;
