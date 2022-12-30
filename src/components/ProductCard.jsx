import React from "react";
import { ReactComponent as Cart } from "../assets/images/cart.svg";

const ProductCard = ({ image, age, name, price, gene }) => {
  return (
    <div>
      <div className=" border rounded-2xl p-2  drop-shadow-xl">
        <div>
          <img src={image} alt="" className="rounded-2xl  object-fill w-full" />
        </div>

        <div className="space-y-2">
          <h1 className="text-md font-bold">{name}</h1>
          <h3 className="text-[#667479] text-xm">
            Gene: <span className="font-medium">{gene}</span>{" "}
          </h3>
          <h3 className="text-[#667479] text-xm">
            Age: <span className="font-medium">{age}</span>
          </h3>
          <span className="flex items-center gap-9">
            <h3 className="text-md font-bold">{price}</h3>
            <p className="border px-1 pt-1 font-bold rounded-2xl bg-slate-600">
              Add to cart
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
