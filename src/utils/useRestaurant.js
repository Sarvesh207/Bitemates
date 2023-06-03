import { useEffect, useState } from "react";


const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`
    );
    
    const json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
   
  }

  return restaurant;
};

export default useRestaurant;
