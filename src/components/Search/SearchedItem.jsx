import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const SearchedItem = () => {
    const[searchedItem, setSearchedItem] = useState([]);
    const getSearchedItems = async () => {
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=Pizza&trackingId=null&submitAction=SUGGESTION&queryUniqueId=7e4454a0-c763-4cef-7e4f-fd7b71e2a368&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22VEG%22%2C%22cloudinaryId%22%3A%22sbt21spuw3am55e4vwny%22%2C%22dishFamilyId%22%3A%22846682%22%2C%22dishFamilyIds%22%3A%5B%22846682%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`)
        const json = data.json();
    }
    useEffect(() => {
        getSearchedItems();
    })
  return (
  
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-base font-semibold text-indigo-600">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Work In Progress </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for till then explore Home Page & Other Functionality.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link to="/"
          
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
        <Link to="/contact"  className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  </main>
  )
}

export default SearchedItem