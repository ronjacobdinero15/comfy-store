import { useDispatch, useSelector } from "react-redux";

import { toggleSidebar } from "./cartSlice";

function Sidebar() {
  const isOpen = useSelector((state) => state.cart.isSidebarOpen);
  const dispatch = useDispatch();

  const handleOutsideClick = (e) => {
    if (e.target.id === "sidebar-wrapper") {
      dispatch(toggleSidebar());
    }
  };

  return (
    <div
      id="sidebar-wrapper"
      className={`${
        isOpen ? "opacity-100" : "invisible opacity-0"
      } fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity duration-300`}
      onClick={handleOutsideClick}
    >
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } fixed top-0 z-30 h-dvh w-full max-w-[80vw] bg-white px-4 py-5 shadow-2xl transition-all duration-300 sm:max-w-[60vw] md:w-[35vw] lg:px-[35px] xl:max-w-[30vw]`}
      >
        <div className="grid grid-cols-[auto_1fr_auto] border-b">
          <div className="pb-1 text-lg font-semibold">Your cart</div>
          <div className=""></div>
          <div className=""></div>
        </div>

        <button
          className="absolute -left-3 top-1/2 z-40 flex items-center justify-center rounded-full bg-violet-300 p-1 transition active:bg-violet-400"
          onClick={() => dispatch(toggleSidebar())}
        >
          <img className="w-6" src="./forward.svg" alt="back_icon" />
        </button>
      </aside>
    </div>
  );
}

export default Sidebar;
