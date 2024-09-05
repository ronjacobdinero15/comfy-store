import { useDispatch } from "react-redux";

import cart_light from "/assets/cart_light.svg";

import { addToCart, toggleSidebar } from "./cartSlice";

function AddToCartButton({ item }) {
  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();

    const newItemObj = {
      ...item,
      quantity: 1,
    };

    dispatch(addToCart(newItemObj));
    dispatch(toggleSidebar());
  }

  return (
    <button
      className="h-9 px-1 py-1 shadow-sm transition active:bg-yellow-500"
      onClick={handleAddToCart}
    >
      <img className="w-7" src={cart_light} alt="cart_icon" />
    </button>
  );
}

export default AddToCartButton;
