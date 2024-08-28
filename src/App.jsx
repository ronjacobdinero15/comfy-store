import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/comfy-store/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/comfy-store/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/comfy-store/products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "/comfy-store/products/:productId",
        element: <Product />,
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
