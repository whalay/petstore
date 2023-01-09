import { useState } from "react";
import Cart from "./components/cart/Cart";
import Homepage from "./Pages/Homepage";
import ProductDetail from "./Pages/ProductDetail";
import CartProvider from "./store/CartProvider";
import ErrorPage from "./components/error-page";

import { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import ComingSoon from "./Pages/ComingSoon";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      <Navbar onShowCart={showCartHandler} />
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        {/* errorElement: <ErrorPage />, */}
        <Route path="product/:id" element={<ProductDetail />} />
        <Route path="/category" element={<ComingSoon />} />
        <Route path="/contact" element={<ComingSoon />} />
        <Route path="/about" element={<ComingSoon />} />
      </Routes>
    </Fragment>
  );
}

export default App;
