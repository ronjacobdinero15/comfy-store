import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Product from "../features/products/Product";
import { getAllProducts } from "../features/products/productsSlice";
import { useState } from "react";

function Products() {
  const [sortBy, setSortBy] = useState("default");
  const products = useSelector(getAllProducts);
  const { searchProduct, categoryType } = useParams();

  // Filter products based on search and category
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

  // Sort products based on the sort option
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
      <div className="container mx-auto">
        {/* HEADER */}
        <header className="container flex justify-between">
          <div className="">
            {/* SEARCH RESULT */}
            <div>
              {searchProduct
                ? `Search results for "${searchProduct}"`
                : "Showing all products"}
            </div>
            <div>Showing {sortedProducts.length} Results</div>
          </div>

          <div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="ascending">Prices low to high</option>
              <option value="descending">Prices high to low</option>
            </select>
          </div>
        </header>
        {/* PRODUCTS */}
        <main className="container grid grid-cols-2 gap-5 py-10 sm:grid-cols-3 md:gap-y-10 lg:grid-cols-4 xl:grid-cols-5 xl:gap-5">
          {sortedProducts.map((item) => (
            <Product item={item} key={item.id} type="store" />
          ))}
        </main>
      </div>
    </main>
  );
}

export default Products;
