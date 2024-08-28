import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr]">
      <Header />

      <div className="overflow-auto">
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
