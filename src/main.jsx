import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ErrorPage from "./components/error-page";
import ProductDetail from "./Pages/ProductDetail";
import CartProvider from "./store/CartProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "product/:id",
    //     element: <ProductDetail />,
    //   },
    // ],
  },
  {
    path: "product/:id",
    element: <ProductDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
    <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
