import React, { Fragment, useState } from "react";
import { Products } from "../database/products";
import { useParams } from "react-router-dom";
import Highlighted from "../components/highlighted";
import Navbar from "../components/Navbar";

const ProductDetail = () => {
  const { id } = useParams();

  const [amount, setAmount] = useState(0);

  const addAmount = () => {
    setAmount(amount + 1);
  };

  const minusAmount = () => {
    setAmount(amount - 1);
  };
  const detail = Products.find((detail) => detail.id === id);

  console.log(detail);

  return (
    <Fragment>
      <Navbar />
      <div>
        <div className="w-screen">
          <img src={detail.image} alt="" className="object-cover h-52 w-96" />
        </div>
        <div className="p-5 space-y-5">
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold">{detail.name}</h1>
            <h2 className="text-xl font-semibold">{detail.price}</h2>
          </div>
          <div className="flex gap-3 text-2xl font-bold">
            <button onClick={addAmount}>+</button>
            <p>{amount}</p>
            <button onClick={minusAmount}>-</button>
          </div>
          <div className="border p-2 bg-black w-full text-white text-center text-2xl font-semibold">
            Add to cart
          </div>

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
