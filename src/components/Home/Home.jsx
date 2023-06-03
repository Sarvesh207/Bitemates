import { useEffect, useState } from "react";
import RestruantCard from "./RetaurrantCard/RestrurantCard.jsx";
import Shimmer from "../Shimmer.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper.js";
import useOnline from "../../utils/useOnline.js";
import Carousal from "../Carousal.jsx";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from "react";


const Home = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [carousal, setCarousal] = useState([]);

  useEffect(() => {
    getRestaurrants();
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  async function getRestaurrants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[0]);
    console.log(json?.data?.cards[2]?.data?.data?.cards);

    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setCarousal(json?.data?.cards[0]?.data?.data.cards);
    
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline please check your internet connection</h1>;
  }

  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="searchContainer h-25  p-5 my-20 bg-sky-950 my-5 flex justify-center items-center ">
        <input
       
          type="text"
          className="search-input text-center w-6/12"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn p-2 m-2 bg-sky-500 hover:bg-sky-700   text-white rounded-lg"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      
        <Carousel responsive={responsive}   transitionDuration={500}  infinite={true}
     
          className="bg-sky-950 p-14 "
        >
          {carousal.map((item) => {
            return <Carousal {...item.data} />;
          })}
        </Carousel>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-3 justify-items-center  lg:px-20 md:px10  mt-20 px-15 ">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestruantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;

//https://www.swiggy.com/dapi/offers/restaurant?lat=18.5204303&lng=73.8567437&offset=0  complicated api

// real new banglore api
//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING

// old good api https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
