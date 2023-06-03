import React, { useEffect, useState } from 'react'

const useCarousal = () => {
  const[carousal, setCarousal] = useState();

  useEffect(() => {
    getCarousalImage();
  },[])

  async function getCarousalImage(){
    const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    setCarousal(json?.data?.cards[0]?.data?.data.cards)
  }

  return carousal;
}

export default useCarousal