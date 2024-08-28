import { createSelector } from "reselect";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { getProducts } from "../../services/apiProducts";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async function () {
    const products = await getProducts();
    return products;
  },
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.status = "idle";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

export default productSlice.reducer;

export const getTopProducts = createSelector(
  (state) => state.product.products,
  (products) => {
    return [...products]
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, 4);
  },
);
