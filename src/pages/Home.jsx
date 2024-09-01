import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import bg_home from "/bg_home.jpg";

import TopProducts from "../features/products/TopProducts.jsx";
import {
  fetchProducts,
  getAllProducts,
} from "../features/products/productsSlice.js";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProducts());
  }, [products, dispatch]);

  return (
    <>
      <div className="relative h-screen w-full sm:h-dvh">
        <img
          src={bg_home}
          alt="home_background"
          className="absolute h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-violet-400/30"></div>
        {/* CONTENTS */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center uppercase tracking-wide text-stone-100">
          <p className="text-2xl font-semibold sm:text-2xl">
            It&apos;s finally here...
          </p>
          <p className="text-5xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Massive sale
          </p>
          <p className="text-2xl font-semibold sm:text-2xl">Up to 70% off</p>
          <div className="mt-8 flex flex-col gap-4 text-center sm:flex-row">
            <Link
              to="/comfy-store/products/category/men's-clothing"
              className="outlineStyle rounded-md border px-4 py-2 font-semibold transition-all hover:bg-stone-100/80 hover:text-stone-700 focus:bg-stone-100/80 focus:text-stone-700 sm:px-2 sm:py-1 md:px-4 md:py-2"
            >
              Men
            </Link>
            <Link
              to="/comfy-store/products/category/women's-clothing"
              className="outlineStyle rounded-md border px-4 py-2 font-semibold transition-all hover:bg-stone-100/80 hover:text-stone-700 focus:bg-stone-100/80 focus:text-stone-700 sm:px-2 sm:py-1 md:px-4 md:py-2"
            >
              Women
            </Link>
            <Link className="outlineStyle rounded-md border px-4 py-2 font-semibold transition-all hover:bg-stone-100/80 hover:text-stone-700 focus:bg-stone-100/80 focus:text-stone-700 sm:px-2 sm:py-1 md:px-4 md:py-2">
              Kids
            </Link>
          </div>
        </div>
      </div>

      <TopProducts />
    </>
  );
}

export default Home;
