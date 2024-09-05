import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import search from "/assets/search.svg";

function SearchProduct({ showSearch }) {
  const [searchQueryProduct, setSearchProduct] = useState("");
  const { searchProduct } = useParams();
  const navigate = useNavigate();

  function handleSearchItem(e) {
    e.preventDefault();

    const trimmedSearchProduct = searchQueryProduct.toLowerCase().trim();

    if (searchProduct === trimmedSearchProduct || trimmedSearchProduct === "") {
      setSearchProduct("");
      return;
    }

    navigate(`/comfy-store/products/search/${trimmedSearchProduct}`);
    setSearchProduct("");
  }

  return (
    <form
      className={`relative h-full w-[90%] transition-all duration-300 sm:block sm:w-[60%] md:w-[50%] md:focus-within:w-[55%] lg:w-[40%] lg:focus-within:w-[45%] ${showSearch ? "block" : "hidden"}`}
      onSubmit={handleSearchItem}
    >
      <input
        className="outlineStyle h-10 w-full rounded-full border-2 border-stone-300 px-2 py-1 pl-4 pr-20 transition-all duration-300"
        value={searchQueryProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
      />

      <button className="outlineStyle absolute right-1 top-1 h-8 cursor-pointer rounded-full bg-violet-300 px-5 transition active:bg-violet-400 sm:block">
        <img className="h-full w-5" src={search} alt="search_icon" />
      </button>
    </form>
  );
}

export default SearchProduct;
