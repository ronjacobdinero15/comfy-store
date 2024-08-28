import { useState } from "react";

import SearchProduct from "../features/products/SearchProduct";
import HomeLink from "./HomeLink";
import CartLink from "../features/cart/CartLink";
import { Link } from "react-router-dom";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex h-16 items-center justify-between bg-white/90 px-5 py-5 shadow-md sm:h-20 sm:px-10">
      {showSearch ? (
        <>
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="outlineStyle rounded-full"
          >
            <img className="w-7" src="./back.svg" alt="back_icon" />
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
              <img className="w-7" src="./search.svg" alt="search_icon" />
            </button>

            {/* STORE */}
            <Link
              to="/comfy-store/products"
              className="outlineStyle rounded-full p-1"
            >
              <img className="w-10" src="./store.svg" alt="store_icon" />
            </Link>

            <CartLink />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
