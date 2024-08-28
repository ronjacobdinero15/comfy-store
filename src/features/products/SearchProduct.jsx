import { useState } from "react";

function SearchProduct({ showSearch }) {
  const [searchProduct, setSearchProduct] = useState("");

  function handleSearchItem() {
    if (searchProduct === "") return;
  }

  return (
    <form
      className={`relative h-10 w-[90%] transition-all duration-300 sm:block sm:w-[60%] md:w-[50%] md:focus-within:w-[55%] lg:w-[40%] lg:focus-within:w-[45%] ${showSearch ? "block" : "hidden"}`}
      onSubmit={handleSearchItem}
    >
      <input
        className="outlineStyle h-full w-full rounded-full border-2 border-stone-300 px-2 py-1 pl-4 pr-20 transition-all duration-300"
        value={searchProduct}
        onChange={(e) => setSearchProduct(e.target.value)}
      />

      <button className="outlineStyle absolute right-1 top-1 h-8 cursor-pointer rounded-full bg-violet-300 px-5 sm:block">
        <img className="h-full w-5" src="./search.svg" alt="search_icon" />
      </button>
    </form>
  );
}

export default SearchProduct;
