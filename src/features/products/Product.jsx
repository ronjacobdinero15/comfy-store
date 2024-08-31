import { Link } from "react-router-dom";

import ProductRating from "../../ui/ProductRating";
import { applyDiscount } from "../../utils/helpers";
import AddToCartButton from "../cart/AddToCartButton";

function Product({ item, type }) {
  return (
    <Link
      to={`/comfy-store/products/${item.id}`}
      className="outlineStyle group box-border py-5 hover:rounded-md focus:rounded-sm sm:px-2 sm:hover:border lg:flex lg:flex-col lg:items-center lg:px-5"
    >
      <div className="relative flex justify-center">
        <img
          src={item.image}
          className="aspect-square w-32 object-contain transition-all group-hover:scale-105 md:w-40 lg:w-48"
          alt={item.title}
        />
        <div
          className={`hidden items-center justify-center rounded-sm bg-yellow-400 lg:absolute lg:-right-5 lg:top-0 lg:flex lg:opacity-0 lg:transition-all lg:group-hover:-right-0 lg:group-hover:opacity-100 ${type === "store" ? "" : "xl:-right-10 xl:top-2 xl:group-hover:-right-5"}`}
        >
          <AddToCartButton item={item} />
        </div>
      </div>

      <div className="flex h-40 flex-col justify-between lg:text-center">
        <div>
          <p className="pt-3 text-xs uppercase text-stone-400 xl:text-sm">
            {item.category}
          </p>
          <h1 className="whitespace-wrap line-clamp-2 max-w-72 overflow-hidden text-ellipsis transition-all sm:group-hover:font-semibold sm:group-hover:underline lg:group-hover:scale-110">
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

          <div className="relative flex items-center justify-between lg:justify-center">
            <div className="flex flex-col text-sm">
              <ProductRating rate={item.rating.rate} />
              <span className="flex items-center gap-1 pl-1 pt-[5px] text-stone-500 lg:justify-center">
                {item.rating.rate}
                <span className="transition-all hover:underline">
                  ({item.rating.count} ratings)
                </span>
              </span>
            </div>

            <div className="flex items-center justify-center rounded-sm bg-yellow-400 lg:hidden">
              <AddToCartButton item={item} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
