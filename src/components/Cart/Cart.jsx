import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem.jsx";
import { clearCart } from "../../utils/cartSlice.js";
import React from "react";
import SideCard from "./SideCard.jsx";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Location from "./Location.jsx";
import IsEmpty from "./IsEmpty.jsx";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();


  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const handleClick = () => {
    console.log("am i working");
    setOpen(!open);
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
            <button
              className="text-green-500 border-2 p-1 border-green-400 my-6"
              onClick={handleClick}
            >
              Add new
            </button>
          </div>
        </div>

        <div className="text-slate-500 font-bold text-lg my-4 w-5/12 bg-white p-4">
          <h1>Payment</h1>
        </div>
      </div>
      <div className="bg-white  flex justify-start items-center m-auto flex-col">
        {cartItems.length !== 0 ? (
          <div className="text-sky-950 font-bold text-lg">
            <p className="text-center">Your Items</p>
            <FoodItem />
          </div>
        ) : (
          <IsEmpty/>
        )}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 mt-20" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-in-out duration-500"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in-out duration-500"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </Transition.Child>
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <Dialog.Title className="text-base mt-20 font-semibold leading-6 text-gray-900">
                          <Location handleClick={handleClick} />
                        </Dialog.Title>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Your content */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      
    </div>
  );
};

export default Cart;
