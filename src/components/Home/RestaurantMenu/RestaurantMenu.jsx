import React from "react";
import { useParams } from "react-router-dom";

import Shimmer from "../../Shimmer.jsx";
import useRestaurant from "../../../utils/useRestaurant.js";
import useRestaurantMenu from "../../../utils/useRestaurantMenu.js";
import { addItem } from "../../../utils/cartSlice.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'


import { IMG_CDN_URL } from "../../../constant.js";

import FormatPrice from "../../../Helper/FormatPrice.js";
import RestauranrInfo from "./RestauranrInfo.jsx";
import RestaurantMenuList from "./RestaurantMenuList.jsx";

const RestaurantMenu = () => {
  const params = useParams();
  const id = params.id;

  //console.log(id);

  const restaurant = useRestaurant(id);

  // const restaurantsMenu = useRestaurantMenu(id);
  // console.log(restaurantInfo);

  // const{ restaurantInfo, restaurantMenu} = restaurant

  // console.log(restaurantInfo, restaurantMenu);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    // console.log(name)

    dispatch(addItem(item));
  };

  return !restaurant ? (
    <div className=" h-[100vh] flex items-center justify-center text-blue-950">
      <ThreeDots 
     
height="80" 
width="80" 
radius="9"
color="#123456" 
ariaLabel="three-dots-loading"
 
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
    </div>
  ) : (
    <div className="menu flex justify-center items-center  flex-col bg-white py-10">
      <p className="text-gray-600 cursor-pointer my-10  ml-5">
        <Link className="cursor-pointer" to="/">
          Home
        </Link>
        / {restaurant.name}
      </p>

      <RestauranrInfo {...restaurant?.info}/>
      <RestaurantMenuList menu={restaurant?.menu}/>

      {/* <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20 bg-white">
        {restaurantsMenu && restaurantsMenu.map((item) => {
          return (
            <div className="hover:shadow-2xl p-3 cursor-pointer transition duration-300 ease-in-out hover:scale-100  " key={item?.card?.info?.id}>
              <img
                className="rounded-lg "
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt="Image"
              />

              <p className="text-black text-sm my-3 font-bold">
                {item?.card?.info?.name}
              </p>
              <p className=" text-gray-600 text-xs">
                {item?.card?.info?.category}
              </p>
              <div className="flex justify-between items-center mt-5">
                <h3>
                  <span className="text-gray-600 text-sm mr-2">
                    <del>
                      <FormatPrice
                        price={
                          isNaN(item?.card?.info?.price * 2)
                            ? 500 * 50
                            : item?.card?.info?.price * 2
                        }
                      />
                    </del>
                  </span>
                  <FormatPrice
                    price={
                      isNaN(item?.card?.info?.price * 2)
                        ? 500 * 20
                        : (item?.card?.info?.price * 2) / 2
                    }
                  />
                </h3>

                <button
                  className="px-3 py-1 transition ease-in duration-200 rounded-xl hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                  onClick={() => {
                    addFoodItem(item), notify;
                  }}
                >
                  Add
                </button>
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default RestaurantMenu;
