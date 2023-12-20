import { useEffect, useState } from "react";

const useRestaurantMenu = (id) =>  {
    const [restaurantsMenu, setRestaurantsMenu] = useState([])
    useEffect(() => {
        getRestaurantInfo();
      }, [id]);
    
      async function getRestaurantInfo() {
        const data = await fetch(
          `https://erin-glamorous-earthworm.cyclic.app/api/proxy/swiggy/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}`
        );
        const json = await data.json();
        
        setRestaurantsMenu(
          json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card?.itemCards
        );
      }

      return restaurantsMenu;
}

export default useRestaurantMenu;