import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { applyDiscount } from "../../utils/helpers";
import { decreaseQuantity, deleteItem, increaseQuantity } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="grid grid-cols-[auto_1fr] gap-5">
        <Link to={`/comfy-store/products/${item.id}`}>
          <img
            className="aspect-square w-20 object-contain"
            src={item.image}
            alt={item.title}
          />
        </Link>

        <div className="flex">
          <div className="flex w-full flex-col justify-center gap-2 sm:gap-5">
            <div className="flex items-start justify-between">
              <p className="line-clamp-2 max-w-32 text-sm font-semibold sm:max-w-52 sm:text-base">
                {item.title}
              </p>
              <button
                className="flex items-center justify-center rounded-full border px-1 text-sm transition-all hover:text-red-500 active:border-none active:bg-red-500 active:font-bold active:text-stone-100 sm:px-[6px] sm:text-base"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                ✕
              </button>
            </div>

            <div className="flex w-full items-center justify-between">
              <div className="grid grid-cols-3">
                <button
                  className="rounded-md rounded-r-none border-[2px] border-r-0 px-3 py-[2px] text-center text-sm font-semibold text-stone-700 transition hover:bg-stone-100 active:bg-stone-200 sm:text-base"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  –
                </button>
                <span className="flex items-center justify-center border-y-[2px] text-sm sm:text-base">
                  {item.quantity}
                </span>
                <button
                  className="rounded-md rounded-l-none border-[2px] border-l-0 px-3 py-[2px] text-center text-sm font-semibold text-stone-700 transition hover:bg-stone-100 active:bg-stone-200 sm:text-base"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <span className="hidden text-stone-400 sm:block">
                ${applyDiscount(item.price)}
              </span>

              <span className="text-sm font-semibold sm:text-base">
                ${Number(item.totalPrice).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
