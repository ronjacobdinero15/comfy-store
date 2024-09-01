import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import forward from "/forward.svg";

import CartItem from "./CartItem";
import {
  clearCart,
  getCart,
  getCartQuantity,
  getTotal,
  toggleSidebar,
} from "./cartSlice";

function Sidebar() {
  const cart = useSelector(getCart);
  const itemsInCart = cart.length > 0;
  const isOpen = useSelector((state) => state.cart.isSidebarOpen);
  const cartQuantity = useSelector(getCartQuantity);
  const cartPriceTotal = useSelector(getTotal);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleOutsideClick = (e) => {
    if (e.target.id === "sidebar-wrapper") {
      dispatch(toggleSidebar());
    }
  };

  return (
    <div
      id="sidebar-wrapper"
      className={`${
        isOpen ? "opacity-100" : "invisible opacity-0"
      } fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300`}
      onClick={handleOutsideClick}
    >
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 z-30 h-dvh w-full max-w-[85vw] bg-white px-5 py-5 shadow-2xl transition-all duration-300 sm:max-w-[60vw] lg:px-[35px] xl:max-w-[30vw]`}
      >
        <div className="grid h-full grid-rows-[auto_1fr_auto]">
          <div className="flex items-center justify-between border-b pb-2">
            <div className="text-sm font-semibold uppercase sm:text-base md:text-lg">
              Your cart {itemsInCart && `(${cartQuantity})`}
            </div>
            {itemsInCart && (
              <button
                className="box-border w-24 rounded-md border-[2px] px-3 py-[2px] text-center text-xs text-stone-700 transition hover:bg-stone-100 active:border-none active:bg-red-500 active:text-stone-100 sm:text-sm"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            )}
          </div>

          <div className="flex flex-col gap-5 divide-y overflow-y-auto pb-4 sm:gap-10 sm:py-8">
            {itemsInCart ? (
              cart.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <div className="absolute inset-0 flex items-center justify-center pt-5 italic">
                No items currently
              </div>
            )}
          </div>

          {itemsInCart && (
            <div className="border-t pt-2">
              <div className="py-4 text-sm font-semibold uppercase tracking-wide sm:text-base">
                Subtotal: ${cartPriceTotal}
              </div>
              <div className="flex flex-col gap-2 text-lg tracking-wide">
                <button
                  className="bg-stone-200 py-2 text-sm sm:text-base"
                  onClick={() => {
                    navigate("/comfy-store/cart");
                    dispatch(toggleSidebar());
                  }}
                >
                  View Cart
                </button>
                <button className="bg-stone-700 py-2 text-sm text-stone-200 sm:text-base">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>

        <button
          className="absolute -left-4 top-1/2 z-40 flex items-center justify-center rounded-full bg-violet-300 p-1 transition active:bg-violet-400"
          onClick={() => dispatch(toggleSidebar())}
        >
          <img className="w-[22px] sm:w-6" src={forward} alt="back_icon" />
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
