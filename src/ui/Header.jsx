import { useState } from "react";

import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import back from "/back.svg";
import store from "/store.svg";
import search from "/search.svg";

import HomeLink from "./HomeLink";
import CartLink from "../features/cart/CartLink";
import SearchProduct from "../features/products/SearchProduct";
import { getCategories } from "../features/products/productsSlice";

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const categories = useSelector(getCategories);

  return (
    <header className="container mx-auto flex !h-28 flex-col gap-3 bg-white/50 px-5 py-5 sm:px-10">
      <div className="flex items-center justify-between">
        {showSearch ? (
          <>
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="outlineStyle rounded-full"
            >
              <img className="w-7" src={back} alt="back_icon" />
            </button>
            <SearchProduct showSearch={showSearch} />
          </>
        ) : (
          <>
            <HomeLink />
            <SearchProduct showSearch={showSearch} />
            <div className="flex items-center justify-between sm:gap-1">
              {/* SEARCH */}
              <button
                className="outlineStyle rounded-full p-2 sm:hidden"
                onClick={() => setShowSearch(!showSearch)}
              >
                <img className="w-7" src={search} alt="search_icon" />
              </button>
              {/* STORE */}
              <Link
                to="/comfy-store/products"
                className="outlineStyle rounded-full p-1"
              >
                <img className="w-10" src={store} alt="store_icon" />
              </Link>

              <CartLink />
            </div>
          </>
        )}
      </div>

      <nav
        className={`container mx-auto px-2 md:px-6 ${showSearch ? "pt-2" : ""}`}
      >
        <ul className="flex items-center justify-between text-center text-xs sm:text-sm">
          {categories.map((category) => (
            <NavLink
              to={`/comfy-store/products/category/${category.replace(/ /g, "-")}`}
              className={({ isActive }) =>
                `relative rounded-sm capitalize tracking-wider outline-none transition-all after:absolute after:-bottom-3 after:left-1/2 after:h-[3px] after:w-0 after:translate-x-[-50%] after:rounded-full after:bg-violet-500 after:transition-all after:duration-300 after:content-[''] hover:text-violet-500 ${
                  isActive
                    ? "font-semibold text-violet-500 after:left-0 after:w-full after:translate-x-0"
                    : "text-stone-700"
                }`
              }
              key={category}
            >
              {category.replace(/ "Clothing"/g, "")}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
