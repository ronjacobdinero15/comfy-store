import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

function AddToCartButton({ item }) {
  const dispatch = useDispatch();

  function handleAddToCart(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(item));
  }

  return (
    <button
      className="h-9 px-1 py-1 shadow-sm transition active:bg-yellow-500"
      onClick={handleAddToCart}
    >
      <img className="w-7" src="./cart_gray.svg" alt="cart_icon" />
    </button>
  );
}

export default AddToCartButton;
