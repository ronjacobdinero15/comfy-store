import { useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";

import { getTopProducts } from "./productsSlice";
import ProductRating from "../../ui/ProductRating";
import { Link } from "react-router-dom";

function TopProducts() {
  const topProducts = useSelector(getTopProducts);

  function applyDiscount(price) {
    return (price * 0.7).toFixed(2);
  }

  return (
    <main className="bg-white px-10 py-10 sm:px-14 sm:py-14">
      <div className="flex items-center">
        <div className="h-[.1px] flex-1 bg-stone-300"></div>
        <span className="w-auto px-3 text-2xl font-bold uppercase tracking-wide">
          Top Products
        </span>
        <div className="h-[.1px] flex-1 bg-stone-300"></div>
      </div>

      <section className="mt-5 grid grid-cols-2 gap-10 md:gap-20 md:gap-y-14 lg:grid-cols-4 lg:pt-5 xl:gap-5">
        {topProducts.map((item) => (
          <Link
            to={`/comfy-store/products/${item.id}`}
            className="outlineStyle focus:rounded-sm lg:flex lg:flex-col lg:items-center"
            key={item.id}
          >
            <div className="flex justify-center">
              <img
                src={item.image}
                className="aspect-square w-32 object-contain md:w-40 lg:w-48"
                alt={item.title}
              />
            </div>

            <div className="flex h-40 flex-col justify-between lg:text-center">
              <div>
                <p className="pt-3 text-sm capitalize text-stone-400">
                  {item.category}
                </p>
                <h1 className="whitespace-wrap line-clamp-2 overflow-hidden text-ellipsis hover:underline">
                  {item.title}
                </h1>
              </div>

              <div>
                <div className="flex items-center gap-2 bg-violet-500 lg:justify-center lg:bg-transparent">
                  <div className="flex items-center font-bold text-yellow-400">
                    <img className="w-4" src="./flash.svg" alt="flash_icon" />
                    <span className="flex items-end">$</span>
                    <span className="text-lg">{applyDiscount(item.price)}</span>
                  </div>
                  <span className="flex items-center text-sm font-semibold text-stone-300 line-through">
                    ${item.price}
                  </span>
                </div>

                <div className="flex flex-col text-sm">
                  <ProductRating rate={item.rating.rate} />
                  <span className="flex items-center gap-1 pl-1 pt-[5px] text-stone-500 lg:justify-center">
                    {item.rating.rate}{" "}
                    <span className="hover:underline">
                      ({item.rating.count} ratings)
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default TopProducts;
