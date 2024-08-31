import { createSelector } from "reselect";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { binarySearch } from "../../utils/helpers";
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

export const getAllProducts = (state) => state.product.products;

export const getSelectedProduct = (id) => (state) => {
  const products = state.product.products;
  return binarySearch(products, id);
};

export const getSearchedProduct = (item) => (state) => {
  const searchedProduct = state.product.products.filter(
    (product) => product.title.toLowerCase() === item,
  );
  return searchedProduct;
};

export const getCategories = createSelector(
  (state) => state.product.products,
  (products) => {
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.category)),
    );
    return uniqueCategories;
  },
);
