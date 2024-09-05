import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./ui/Error";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import AppLayout, { loader as productsLoader } from "./ui/AppLayout";
import Products from "./pages/Products";
import SelectedProduct from "./pages/SelectedProduct";

const router = createBrowserRouter([
  {
    path: "/comfy-store/",
    element: <AppLayout />,
    errorElement: <Error />,
    loader: productsLoader,
    children: [
      {
        path: "/comfy-store/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/comfy-store/products",
        element: <Products />,
      },
      {
        path: "/comfy-store/products/:productId",
        element: <SelectedProduct />,
      },
      {
        path: "/comfy-store/products/search/:searchProduct",
        element: <Products />,
      },
      {
        path: "/comfy-store/products/category/:categoryType",
        element: <Products />,
      },
      {
        path: "/comfy-store/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
