import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../../../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../../../../constant.js";
import { addItem } from "../../../../utils/cartSlice";
import FormatPrice from "../../../../Helper/FormatPrice.js";
import Shimmer from "../../../Shimmer.jsx";

const MenuCards = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  const restaurantsMenu = useRestaurantMenu(id);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  
  return !restaurantsMenu ? (
    <Shimmer />
  ) : (
    <div className="">
      <h1 className="text-gray-600 font-bold text-2xl text-center ">Menu</h1>

      <div className="bg-white">
   
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 px-2 sm:px-6 md:px-10 lg:px-16 xl:px-20">
          {
            restaurantsMenu.map((item) => (
              <div className="hover:shadow-2xl p-3 cursor-pointer transition duration-300 ease-in-out hover:scale-100">
                <img
                  className="rounded-lg "
                  src={IMG_CDN_URL + item?.card?.info?.imageId}
                  alt=""
                />
                <p className="mt-3 text-sky-950 text-lg font-bold">
                  {item?.card?.info?.name}
                </p>

                <p className=" text-gray-600">{item?.card?.info?.category}</p>

                <div className="flex justify-between items-center mt-5">
                  <h3>
                    <span className="text-gray-600 text-sm mr-2">
                      <del>
                      
                        <FormatPrice price={+item?.card?.info?.price * 2} />
                      </del>
                    </span>
                    <FormatPrice price={+item?.card?.info?.price} />
                  </h3>

                  <button
                    className="px-3 py-1 transition ease-in duration-200 rounded-xl hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
                    onClick={() => addFoodItem(item)}
                  >
                    add to cart
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCards;
