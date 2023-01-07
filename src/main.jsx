import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import ErrorPage from "./components/error-page";
import ProductDetail from "./Pages/ProductDetail";
import CartProvider from "./store/CartProvider";

// const router = createBrowserRouter([
//   {
//     path: "product/:id",
//     element: <ProductDetail />,
//     errorElement: <ErrorPage />,
//     // children: [
//     //   {
//     //     path: "product/:id",
//     //     element: <ProductDetail />,
//     //   },
//     // ],
//   },
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CartProvider>
    <App />
    </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
