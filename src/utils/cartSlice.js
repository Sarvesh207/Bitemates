import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //   state.items.push(action.payload);
      const itemInCart = state.items.find(
        (item) => item?.card?.info.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.card.info.inStock++;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      // state.items.pop();

      state.items = state.items.filter(
        (item) => item?.card?.info.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item?.card?.info.id === action.payload
      );
      if (item) {
        item.card.info.inStock++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item?.card?.info.id === action.payload
      );
      if (item) {
        if (item.card.info.inStock === 1) {
          item.card.info.inStock = 1;
        } else {
          item.card.info.inStock--;
        }
      }
    },
  },
});

export const {
  addItem,
  removeItem,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
