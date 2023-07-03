import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    restraunts: [],
  },
  reducers: {
    setRestarunts: (state, action) => {
      const newRestaurants = action.payload.filter(
        (item) => !state.restraunts.some((restaurant) => restaurant.id === item.id)
      );
    
      state.restraunts.push(...newRestaurants);
    },
    setDeliveryTimeFilter: (state, action) => {
      state.restraunts.sort(
        (a, b) => a.data.deliveryTime - b.data.deliveryTime
      );
    },
    setRatingFilter: (state, action) => {
      state.restraunts.sort(
        (a, b) => b.data.avgRating - a.data.avgRating
      );
    },
    setPriceLowtoHighFilter: (state, action) => {
      state.restraunts.sort(
        (a, b) => (a.data.costForTwo)/ - (b.data.costForTwo)/100
      );
    },
    setPriceHightoLowFilter: (state, action) => {
      state.restraunts.sort(
        (a, b) => (b.data.costForTwo)/100 - (a.data.costForTwo)/100
      );
    },
    setIdFilter: (state, action) => {
      state.restraunts.sort(
        (a, b) => b.data.id - (a.data.id)

      );
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
