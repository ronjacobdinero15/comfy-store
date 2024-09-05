import { useState } from "react";

import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import flash from "/assets/flash.svg";

import ProductRating from "../ui/ProductRating";
import { applyDiscount } from "../utils/helpers";
import { addToCart, toggleSidebar } from "../features/cart/cartSlice";
import { getSelectedProduct } from "../features/products/productsSlice";

function SelectedProduct() {
  const { productId } = useParams();
  const selectedProduct = useSelector(getSelectedProduct(parseInt(productId)));

  const [productQuantity, setProductQuantity] = useState(1);
  const dispatch = useDispatch();

  function handleAddToCart() {
    const newItemObj = {
      ...selectedProduct,
      quantity: productQuantity,
    };
    dispatch(addToCart(newItemObj));
    dispatch(toggleSidebar());
    setProductQuantity(1);
  }

  return (
    <main className="gap-5 px-4 py-5 md:px-10">
      <div className="hidden gap-5 text-sm sm:container sm:mx-auto md:flex xl:w-2/3">
        <Link
          className="text-stone-400 transition hover:text-violet-600"
          to="/comfy-store/"
        >
          Home
        </Link>
        <span>&gt;</span>
        <Link
          className="text-stone-400 transition hover:text-violet-600"
          to="/comfy-store/products"
        >
          Products
        </Link>
        <span>&gt;</span>
        <Link
          to={`/comfy-store/products/category/${selectedProduct.category.replace(/ /g, "-")}`}
          className="capitalize text-stone-400 transition hover:text-violet-600"
        >
          {selectedProduct.category}
        </Link>
        <span>&gt;</span>
        <span className="text-violet-600">{selectedProduct.title}</span>
      </div>

      <div className="flex flex-col items-center gap-5 space-y-7 sm:container sm:mx-auto sm:space-y-10 sm:py-10 xl:w-2/3">
        <div className="flex flex-col gap-x-5 sm:flex-row sm:gap-x-16 xl:gap-x-5">
          <div className="flex justify-center pt-2">
            <img
              className="aspect-square w-48 object-contain transition duration-300 hover:scale-110 sm:w-60 xl:w-60"
              src={selectedProduct.image}
              alt={selectedProduct.title}
            />
          </div>

          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="py-5 pb-3 text-center text-xl font-semibold sm:text-start xl:text-2xl">
              {selectedProduct.title}
            </div>

            {/* RATINGS */}
            <div className="flex items-center gap-2">
              <div className="pt-[5px]">{selectedProduct.rating.rate}</div>
              <ProductRating rate={selectedProduct.rating.rate} />|
              <div className="flex cursor-pointer text-yellow-500 underline transition hover:text-yellow-400">
                <span>{selectedProduct.rating.count}&nbsp;</span>
                <span className="">Reviews</span>
              </div>
            </div>

            {/* DICOUNTED PRICE */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <img className="w-5" src={flash} alt="flash_icon" />
                <div className="text-xl font-bold text-yellow-400">
                  ${applyDiscount(selectedProduct.price)}
                </div>
              </div>
              <span className="rounded-md bg-yellow-400 px-2 py-1 font-semibold text-white">
                70% OFF
              </span>
            </div>

            {/* ORIGINAL PRICE */}
            <div className="text-sm font-semibold text-stone-400 line-through">
              ${selectedProduct.price}
            </div>

            <div className="flex flex-col gap-1 sm:flex-row sm:gap-3">
              {/* QUANTIFIER */}
              <div className="grid h-8 w-40 grid-cols-3">
                <button
                  className="rounded-md rounded-r-none border-[2px] border-r-0 px-2 py-[2px] text-center text-sm font-semibold text-stone-700 transition hover:bg-stone-100 active:bg-stone-200 sm:px-3 sm:text-base"
                  onClick={() =>
                    setProductQuantity((quantity) => {
                      if (quantity === 1) return quantity;
                      return quantity - 1;
                    })
                  }
                >
                  –
                </button>
                <span className="flex items-center justify-center border-y-[2px] text-sm sm:text-base">
                  {productQuantity}
                </span>
                <button
                  className="rounded-md rounded-l-none border-[2px] border-l-0 px-2 py-[2px] text-center text-sm font-semibold text-stone-700 transition hover:bg-stone-100 active:bg-stone-200 sm:px-3 sm:text-base"
                  onClick={() => setProductQuantity((quantity) => quantity + 1)}
                >
                  +
                </button>
              </div>
              {/* ADD TO CART */}
              <div className="">
                <button
                  className="mt-1 h-8 w-40 rounded-md bg-yellow-400 px-10 py-[2px] text-center text-sm font-semibold text-white transition hover:bg-yellow-300 active:bg-yellow-500 sm:mt-0 sm:px-3 sm:text-base"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-1 pb-2 sm:items-start">
          <p className="text-lg font-semibold">Product Description</p>
          <p className="max-w-3xl text-justify">
            {selectedProduct.description}
          </p>
        </div>
      </div>
    </main>
  );
}

export default SelectedProduct;
