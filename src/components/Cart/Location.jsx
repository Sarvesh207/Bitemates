import React from "react";
import { useState, useEffect } from "react";
import Shimmer2 from "./Shimmer2";

const Location = ({handleClick}) => {

  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  console.log(locations);

  const getLocationsSuggestions = async () => {
    const res = await fetch(
      `https://www.swiggy.com/dapi/misc/place-autocomplete?input=${query}&types=`
    );
    const data = await res.json();

    setLocations(data?.data);
  };
  useEffect(() => {
    let intervalId = setTimeout(() => {
      console.log(query);
      getLocationsSuggestions();
    }, 300);

    return () => {
      clearTimeout(intervalId);
    };
  }, [query]);



 

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mb-7 text-lg cursor-pointer"
        onClick={handleClick}
       
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>

      <div className=" border-2 rounded-md px-4 py-2 shadow-lg">
        <input
          className="w-60 outline-none px-2"
          type="text"
          placeholder="Search for area, street name.."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div>
        <ul>
          {locations &&
            locations.map((location) => {
              return (
                <li
                  className="mt-5 pb-4 border-dotted border-b-2  flex hover:bg-slate-200 rounded-md px-3 py-2"
                  key={location?.place_id}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>

                  <div>
                    <h3 className="text-black text-sm">
                      {location?.structured_formatting?.main_text}
                    </h3>

                    <p className="text-xs font-thin text-gray-500">
                      {location?.structured_formatting?.secondary_text}
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Location;
