import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Product from "../features/products/Product";
import {
  fetchProducts,
  getAllProducts,
} from "../features/products/productsSlice";

function Products() {
  const [sortBy, setSortBy] = useState("default");
  const products = useSelector(getAllProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, [products, dispatch]);

  const { searchProduct, categoryType } = useParams();

  const filteredProducts = products
    .filter((product) => {
      if (searchProduct) {
        return product.title.toLowerCase().includes(searchProduct);
      }
      return true;
    })
    .filter((product) => {
      if (categoryType) {
        return product.category.replace(/ /g, "-") === categoryType;
      }
      return true;
    });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === "ascending") {
      return a.price - b.price;
    } else if (sortBy === "descending") {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <main className={`${sortedProducts.length > 0 ? "" : "h-full"}`}>
      <div className="h-full px-5 sm:container sm:mx-auto">
        {/* HEADER */}
        <header
          className={`${searchProduct ? "justify-between" : "justify-end"} flex h-16 items-center gap-5 border-b py-10 md:container`}
        >
          {/* SEARCH RESULT */}
          {searchProduct && (
            <div className="flex flex-col">
              <div className="flex flex-col flex-wrap text-sm font-bold sm:flex-row lg:text-lg">
                <span>Search results for&nbsp;</span>
                <span>&quot;{searchProduct}&quot;</span>
              </div>
              <div className="text-xs md:text-sm lg:text-base">
                Showing {sortedProducts.length} Results
              </div>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm sm:gap-5">
            <span className="text-sm lg:text-base">Sort by:</span>
            <select
              className="outlineStyle rounded-full border-2 border-stone-300 bg-white px-2 py-2 text-sm lg:text-base"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">
                {searchProduct ? "Relevance" : "Default"}
              </option>
              <option value="ascending">Prices low to high</option>
              <option value="descending">Prices high to low</option>
            </select>
          </div>
        </header>
        {/* PRODUCTS */}
        <main
          className={`${sortedProducts.length > 0 ? "grid grid-cols-2 gap-x-5 px-5 py-10 sm:grid-cols-3 md:gap-y-10 lg:grid-cols-4 xl:grid-cols-5" : "flex items-center justify-center"} container h-full`}
        >
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item) => (
              <Product item={item} key={item.id} type="store" />
            ))
          ) : (
            <section className="">Sorry item not found :&#40;</section>
          )}
        </main>
      </div>
    </main>
  );
}

export default Products;
