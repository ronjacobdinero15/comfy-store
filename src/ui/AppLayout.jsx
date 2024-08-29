import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Loader from "./Loader";

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

export default AppLayout;
