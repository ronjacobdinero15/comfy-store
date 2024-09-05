import { useSelector } from "react-redux";

import Product from "./Product";
import { getTopProducts } from "./productsSlice";

function TopProducts() {
  const topProducts = useSelector(getTopProducts);

  return (
    <main className="bg-white">
      <div className="px-4 py-10 sm:container sm:mx-auto sm:py-14">
        <div className="flex items-center">
          <div className="h-[.1px] flex-1 bg-stone-300"></div>
          <span className="w-auto px-3 text-2xl font-bold uppercase tracking-wide">
            Top Products
          </span>
          <div className="h-[.1px] flex-1 bg-stone-300"></div>
        </div>
        <section className="mt-3 grid grid-cols-2 gap-x-5 md:gap-x-10 md:gap-y-14 lg:grid-cols-4 xl:gap-5">
          {topProducts.map((item) => (
            <Product item={item} key={item.id} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default TopProducts;
