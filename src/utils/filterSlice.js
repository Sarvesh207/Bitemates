import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    deliveryTime: null,
    rating: null,
    price: null,
  },
  reducers: {
    setDeliveryTimeFilter: (state, action) => {
      state.deliveryTime = action.payload;
    },
    setRatingFilter: (state, action) => {
      state.rating = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    clearFilters: (state) => {
      state.deliveryTime = null;
      state.rating = null;
      state.price = null;
    },
  },
});

export const {
  setDeliveryTimeFilter,
  setRatingFilter,
  setPriceFilter,
  clearFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
