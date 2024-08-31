import { useState } from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Product from "../features/products/Product";
import { getAllProducts } from "../features/products/productsSlice";

function Products() {
  const [sortBy, setSortBy] = useState("default");
  const products = useSelector(getAllProducts);
  const { searchProduct, categoryType } = useParams();

  const filteredProducts = products
    .filter((product) => {
      if (searchProduct) {
        return product.title
          .toLowerCase()
          .includes(searchProduct.toLowerCase());
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
    <main>
      <div className="sm:container sm:mx-auto">
        {/* HEADER */}
        <header
          className={`${searchProduct ? "justify-between" : "justify-end"} container flex h-16 items-center border-b py-4`}
        >
          {/* SEARCH RESULT */}
          {searchProduct && (
            <div className="flex flex-col">
              <div className="text-lg font-bold">
                Search results for &quot;{searchProduct}&quot;
              </div>
              <div>Showing {sortedProducts.length} Results</div>
            </div>
          )}

          <div className="flex items-center gap-2 text-sm sm:gap-5">
            <span>Sort by: </span>
            <select
              className="outlineStyle rounded-full border-2 border-stone-300 px-2 py-2"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="ascending">Prices low to high</option>
              <option value="descending">Prices high to low</option>
            </select>
          </div>
        </header>
        {/* PRODUCTS */}
        <main
          className={`${sortedProducts.length > 0 ? "container grid grid-cols-2 gap-x-5 px-5 py-10 sm:grid-cols-3 md:gap-y-10 lg:grid-cols-4 xl:grid-cols-5" : "flex min-h-screen items-center justify-center"}`}
        >
          {sortedProducts.length > 0 ? (
            sortedProducts.map((item) => (
              <Product item={item} key={item.id} type="store" />
            ))
          ) : (
            <section className="">
              <div className="">Sorry item not found :(</div>
            </section>
          )}
        </main>
      </div>
    </main>
  );
}

export default Products;
