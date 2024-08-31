import { useDispatch } from "react-redux";

import { decreaseQuantity, deleteItem, increaseQuantity } from "./cartSlice";
import { applyDiscount } from "../../utils/helpers";
import { Link } from "react-router-dom";

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
          <div className="flex w-full flex-col justify-center gap-5">
            <div className="flex items-center justify-between">
              <p className="line-clamp-2 max-w-52 font-semibold">
                {item.title}
              </p>
              <button
                className="flex items-center justify-center rounded-full border px-[6px] transition-all duration-300 hover:font-semibold active:border-none active:bg-red-500 active:font-bold active:text-stone-100"
                onClick={() => dispatch(deleteItem(item.id))}
              >
                ✕
              </button>
            </div>

            <div className="flex w-full items-center justify-between">
              <div className="grid grid-cols-3">
                <button
                  className="rounded-md rounded-r-none border-[2px] border-r-0 px-3 py-[2px] text-center font-semibold text-stone-700 transition hover:bg-stone-100 active:bg-stone-200"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  –
                </button>
                <span className="flex items-center justify-center border-y-[2px]">
                  {item.quantity}
                </span>
                <button
                  className="rounded-md rounded-l-none border-[2px] border-l-0 px-3 py-[2px] text-center font-semibold text-stone-700 transition hover:bg-stone-100 active:bg-stone-200"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>

              <span className="text-stone-400">
                ${applyDiscount(item.price)}
              </span>

              <span className="font-semibold">
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
