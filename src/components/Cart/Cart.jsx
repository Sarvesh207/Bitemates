import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem.jsx";
import { clearCart } from "../../utils/cartSlice.js";
import React from "react";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-slate-200  ">
      <div className="flex justify-center items-center flex-col ">
        <div className="bg-white p-20">
          <div className=" mb-20">
            <h1 className="text-sky-950 font-bold   text-lg ">
              Add a delivery address
            </h1>
            <h2 className="text-gray-500 font-bold  text-sm">
              You seem to be in the new location
            </h2>
          </div>
          <div className="flex justify-center items-center flex-col border-dotted border-2 hover:shadow-2xl border-slate-300 p-4 hover:scale-110 ">
            <h1 className="text-sky-950 font-bold  text-sm my-2">
              Add New Address
            </h1>
            <p className="text-slate-500 text-xs font-normal my-2">
              15/11, KG Halli, D' Souza Layout, Ashok Nagar, Bengaluru,
              Karnataka 560001, India
            </p>
            <button className="text-green-500 border-2 p-1 border-green-400 my-6">
              Add new{" "}
            </button>
          </div>
        </div>

        <div className="text-slate-500 font-bold text-lg my-4 w-5/12 bg-white p-4">
          <h1>Payment</h1>
        </div>
      </div>
      <div className="bg-white  flex justify-start items-center m-auto flex-col">
        <div className="text-sky-950 font-bold text-lg ">
          <p className="text-center">Your Items</p>
          <FoodItem />
        </div>

        
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;