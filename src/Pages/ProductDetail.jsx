import React, { Fragment, useState } from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { Products } from "../database/products";
import { useParams } from "react-router-dom";
import Highlighted from "../components/highlighted";
import Navbar from "../components/Navbar";
import ProductForm from "../components/ProductForm";

const ProductDetail = () => {
  const { id } = useParams();
  const cartCtx = useContext(CartContext);

  const addToCart = () => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: detail.price,
      amount: 1,
    });
  };

  const detail = Products.find((detail) => detail.id === id);
  const name = detail.name;
  console.log(detail);
  const price = `$${detail.price.toFixed(2)}`;

  return (
    <Fragment>
      <div className="flex ">
        <div className="basis-2/5">
          <img src={detail.image} alt="" className="object-fill w-full " />
        </div>
        <div className="p-10 space-y-5 basis-3/5">
          <div className="flex justify-between gap-5">
            <h1 className="text-2xl font-bold">{detail.name}</h1>
            <h2 className="text-xl font-semibold">{price}</h2>
          </div>
          {/* <div className="flex gap-3 text-2xl font-bold">
            <button >+</button>
            <p></p>
            <button >-</button>
          </div> */}
          {/* <ProductForm onAddToCart={addToCartHandler} /> */}
          <button
            onClick={addToCart}
            className="border p-2 bg-black w-full text-white text-center text-2xl font-semibold"
          >
            Add to cart
          </button>

          <hr className="py-2" />
          <h2 className="text-xl font-semibold border-b">information</h2>
          <div className="flex justify-start gap-28 border-b py-2">
            <p>Sex</p> <p className="text-center">:{detail.gene}</p>
          </div>
          <div className="flex justify-start gap-28 border-b py-2">
            <p>Age</p> <p className="text-center">:{detail.age}</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
