import { Link } from "react-router-dom";

function CartLink() {
  return (
    <Link
      to="/fake-store-api-new/cart"
      className="outlineStyle relative p-2 transition-all duration-300 focus:rounded-full sm:block"
    >
      <img className="w-7" src="./cart.svg" alt="cart_icon" />
      <span className="absolute -right-1 top-0 flex items-center justify-center rounded-full bg-violet-300 px-1 text-center text-sm font-semibold">
        10
      </span>
    </Link>
  );
}

export default CartLink;
