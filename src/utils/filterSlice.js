import { createSlice } from "@reduxjs/toolkit";
import { convertPriceStringToNumber } from "./helper";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    restraunts: [],
  },
  reducers: {
    // setRestarunts: (state, action) => {
    //   const newRestaurants = action.payload.filter(
    //     (item) => !state.restraunts.some((restaurant) => restaurant.info.id === item.info.id)
    //   );

    //   state.restraunts.push(...newRestaurants);
    // },
    setRestarunts: (state, action) => {
      if (action.payload && Array.isArray(action.payload)) {
        // Check if action.payload is defined and an array
        const newRestaurants = action.payload.filter(
          (item) =>
            !state.restraunts.some(
              (restaurant) => restaurant.info.id === item.info.id
            )
        );
        state.restraunts.push(...newRestaurants);
      }
    },

    setDeliveryTimeFilter: (state, action) => {
      console.log(state);
      state.restraunts.sort(
        (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
      );
    },
    setRatingFilter: (state, action) => {
      state.restraunts.sort((a, b) => b.info.avgRating - a.info.avgRating);
    },
    setPriceLowtoHighFilter: (state, action) => {
      state.restraunts.sort((a, b) => {
        const aPrice = convertPriceStringToNumber(a.info.costForTwo);
        const bPrice = convertPriceStringToNumber(b.info.costForTwo);
        return aPrice - bPrice;
      });
    },

    // setPriceHightoLowFilter: (state, action) => {
    //   state.restraunts.sort(
    //     (a, b) => (b.data.costForTwo)/100 - (a.data.costForTwo)/100
    //   );
    // },

    // Your setPriceHightoLowFilter reducer
    setPriceHightoLowFilter: (state, action) => {
      state.restraunts.sort((a, b) => {
        const aPrice = convertPriceStringToNumber(a.info.costForTwo);
        const bPrice = convertPriceStringToNumber(b.info.costForTwo);
        return bPrice - aPrice;
      });
    },
    setIdFilter: (state, action) => {
      state.restraunts.sort((a, b) => a.info.id - b.info.id);
    },
  },
});

export const {
  setDeliveryTimeFilter,
  setPriceLowtoHighFilter,
  setPriceHightoLowFilter,
  setRatingFilter,
  setRestarunts,
  setIdFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
