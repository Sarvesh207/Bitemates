import React from "react";
import { IMG_CDN_URL } from "../../constant.js";
import { useDispatch, useSelector } from "react-redux";
import FormatPrice from "../../Helper/FormatPrice.js";

import {
  clearCart,
  removeItem,
  incrementQuantity,
  decrementQuantity,
} from "../../utils/cartSlice.js";

const FoodItem = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item.card.info.id));
  };

  const handleIncrementQuantity = (item) => {
    dispatch(incrementQuantity(item.card.info.id));
  };

  const handleDecrementQuantity = (item) => {
    dispatch(decrementQuantity(item.card.info.id));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item?.card?.info?.price || 0;
    });
    return totalPrice;
  };

  const total = calculateTotalPrice();
  console.log(total);

  return (
    <div className="w-full my-10 lg:w-auto sm:ml-10  ">
      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItems.map((item) => (
              <li key={item?.card?.info.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={IMG_CDN_URL + item?.card?.info.imageId}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>{item?.card?.info.name}</h3>
                      <p className="ml-4">
                        <FormatPrice price={isNaN(item?.card?.info?.price * 2) ? 500*20 : item?.card?.info?.price * 2} />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <div className="cartItem__incrDec flex items-center text-lg">
                      <button
                        className="mr-2"
                        onClick={() => handleDecrementQuantity(item)}
                      >
                        -
                      </button>
                      <p className="text-green-500">
                        {item?.card?.info?.inStock}
                      </p>
                      <button
                        className="ml-2 "
                        onClick={() => handleIncrementQuantity(item)}
                      >
                        +
                      </button>
                    </div>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                        onClick={() => handleRemoveItem(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 w-full m-auto mt-10 sm:px-6">
        <div className="flex justify-between m-full text-base font-medium sm:w-full sm:m-auto text-gray-900 flex-col">
          <p className="mt-4">Bill Details</p>
          <div className="flex justify-start items-center gap-x-5">
            <p>Item Total</p>
            <p>
              <FormatPrice price={calculateTotalPrice()} />
            </p>
          </div>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
          >
            Checkout
          </a>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or  
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 px-3"
            >
                Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
