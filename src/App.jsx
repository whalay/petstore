import { useState } from "react";
import { Outlet } from "react-router-dom";
import Cart from "./components/cart/Cart";
import Homepage from "./Pages/Homepage";
import ProductDetail from "./Pages/ProductDetail";
import CartProvider from "./store/CartProvider";
import { Fragment } from "react";

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
      {cartIsShown && <Cart onCloseCart={hideCartHandler} />}
      <Homepage onShowCart={showCartHandler} />
      <Outlet />
    </Fragment>
  );
}

export default App;
