import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import { ReactComponent as Cart } from "../assets/images/cart.svg";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfcartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber+1;
  }, 0);
  return (
    <button className="relative" onClick={props.onClick}>
      <span className="">
        <Cart />
      </span>
      <span className="absolute top-0 right-0 bg-white px-1 rounded-full text-[12px]">
        {numberOfcartItems}
      </span>
    </button>
  );
};

export default HeaderCartButton;
