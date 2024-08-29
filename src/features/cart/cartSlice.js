import { createSlice } from "@reduxjs/toolkit";
import { binarySearch } from "../../utils/helpers";

const initialState = {
  cart: [],
  isSidebarOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    addToCart(state, action) {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (itemInCart) {
        itemInCart.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const getCartQuantity = (state) => {
  return state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
};

export const { toggleSidebar, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
