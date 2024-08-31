import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { fetchProducts } from "../features/products/productsSlice.js";
import TopProducts from "../features/products/TopProducts.jsx";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="relative h-screen w-full sm:h-dvh">
        <img
          src="./bg_home.jpg"
          alt="home_background"
          className="absolute h-full w-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-violet-400/30"></div> */}
        {/* CONTENTS */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center uppercase tracking-wide text-stone-100">
          <p className="text-xl font-semibold sm:text-2xl">
            It&apos;s finally here...
          </p>
          <p className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
            Massive sale
          </p>
          <p className="text-xl font-semibold sm:text-2xl">Up to 70% off</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="outlineStyle rounded-md border px-4 py-2 font-semibold transition-all hover:bg-stone-100/80 hover:text-stone-700 focus:bg-stone-100/80 focus:text-stone-700 sm:px-2 sm:py-1 md:px-4 md:py-2">
              Men
            </button>
            <button className="outlineStyle rounded-md border px-4 py-2 font-semibold transition-all hover:bg-stone-100/80 hover:text-stone-700 focus:bg-stone-100/80 focus:text-stone-700 sm:px-2 sm:py-1 md:px-4 md:py-2">
              Women
            </button>
            <button className="outlineStyle rounded-md border px-4 py-2 font-semibold transition-all hover:bg-stone-100/80 hover:text-stone-700 focus:bg-stone-100/80 focus:text-stone-700 sm:px-2 sm:py-1 md:px-4 md:py-2">
              Kids
            </button>
          </div>
        </div>
      </div>

      <TopProducts />
    </>
  );
}

export default Home;
