import Modal from "../Modal";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="m-0 p-0 max-h-80 overflow-auto">
      {cartCtx.items.map((item, key) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal className="p-5 z-50" onClick={props.onCloseCart}>
      {cartItems}
      <div className="flex justify-between py-3">
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
      </div>
      <div className="flex justify-end gap-5">
        <button
          className="bg-[#FCEED5] px-3 py-1 rounded-2xl"
          onClick={props.onCloseCart}
        >
          close
        </button>
        {hasItems && (
          <button className="px-3 py-1 rounded-2xl border">order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
