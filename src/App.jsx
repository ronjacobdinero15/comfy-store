import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./ui/Error";
import AppLayout from "./ui/AppLayout";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Products from "./pages/Products";

const router = createBrowserRouter([
  {
    path: "/fake-store-api-new/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/fake-store-api-new/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/fake-store-api-new/products",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "/fake-store-api-new/products/:productId",
        element: <Product />,
      },
      {
        path: "/fake-store-api-new/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
