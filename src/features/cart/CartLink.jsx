import { useDispatch, useSelector } from "react-redux";
import { getCartQuantity, toggleSidebar } from "./cartSlice";
import Sidebar from "./Sidebar";

function CartLink() {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(getCartQuantity);

  return (
    <div>
      <button
        className="outlineStyle group relative p-2 transition-all duration-300 focus:rounded-full sm:block"
        onClick={() => dispatch(toggleSidebar())}
      >
        <img className="w-7" src="./cart.svg" alt="cart_icon" />

        {cartQuantity > 0 && (
          <span className="absolute -right-1 top-0 z-10 flex items-center justify-center rounded-full bg-violet-300 px-1 text-center text-sm font-semibold group-focus:outline-none group-focus:ring-4 group-focus:ring-violet-300 group-focus:ring-opacity-50">
            {cartQuantity}
          </span>
        )}
      </button>

      <Sidebar />
    </div>
  );
}

export default CartLink;
