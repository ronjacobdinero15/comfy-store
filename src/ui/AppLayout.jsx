import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import store from "../store";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "./Loader";
import { fetchProducts } from "../features/products/productsSlice";

function AppLayout() {
  const productsStatus = useSelector((state) => state.product.status);
  const isLoadingProducts = productsStatus === "loading";

  return (
    <div className="grid h-dvh grid-rows-[auto_1fr]">
      {isLoadingProducts && <Loader />}

      <Header />

      <div className="overflow-auto">
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export async function loader() {
  await store.dispatch(fetchProducts());
  return null;
}

export default AppLayout;
