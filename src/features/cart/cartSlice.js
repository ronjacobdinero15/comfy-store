import { createSlice } from "@reduxjs/toolkit";
import { applyDiscount } from "../../utils/helpers";

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
    // ACCEPTS: ID
    addToCart(state, action) {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (itemInCart) {
        itemInCart.quantity += 1;
        itemInCart.totalPrice =
          itemInCart.quantity * applyDiscount(itemInCart.price);
      } else {
        state.cart.push({
          ...action.payload,
          quantity: 1,
          totalPrice: applyDiscount(action.payload.price),
        });
      }
    },
    // ACCEPTS: ID
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    // ACCEPTS: ID
    decreaseQuantity(state, action) {
      const itemInCart = state.cart.find((item) => item.id === action.payload);

      itemInCart.quantity--;
      itemInCart.totalPrice =
        itemInCart.quantity * applyDiscount(itemInCart.price);

      if (itemInCart.quantity === 0)
        cartSlice.caseReducers.deleteItem(state, action);
    },
    // ACCEPTS: ID
    increaseQuantity(state, action) {
      const itemInCart = state.cart.find((item) => item.id === action.payload);

      itemInCart.quantity++;
      itemInCart.totalPrice =
        itemInCart.quantity * applyDiscount(itemInCart.price);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  toggleSidebar,
  addToCart,
  deleteItem,
  decreaseQuantity,
  increaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotal = (state) =>
  state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2);

export const getCart = (state) => state.cart.cart;

export const getCartQuantity = (state) => {
  return state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
};
