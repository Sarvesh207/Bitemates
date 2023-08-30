import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
     
     
      const itemInCart = state.items.find(
       
        (item) => item?.id === action.payload.id
      );
     
      if (itemInCart) {
        itemInCart.inStock++;
      } else {
        state.items.push(action.payload);
       
      }
    },
    removeItem: (state, action) => {
      // state.items.pop();

      state.items = state.items.filter(
        (item) => item?.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item?.id === action.payload
      );
      if (item) {
        item.inStock++;
      }
    },
    decrementQuantity: (state, action) => {
    
      const item = state.items.find(
        (item) => item?.id === action.payload
      );
      if (item) {
        if (item.inStock === 1) {
          item.inStock = 1;
        } else {
          item.inStock--;
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
