import React from "react";
import { ReactComponent as Dog } from "../assets/images/dog1.svg";
import dog1 from "../assets/images/dog1.svg";
import dog2 from "../assets/images/dog2.svg";

import { ReactComponent as Cart } from "../assets/images/cart.svg";
import ProductCard from "./ProductCard";

const Products = [
  {
    image: dog1,
    name: "MO231 - Pomeranian White",
    gene: "maale",
    age: "2 years",
    price: "$2.00",
  },
  {
    image: dog2,
    name: "MO231 - Pomeranian White",
    gene: "maale",
    age: "2 years",
    price: "$2.00",
  },
];

const Product = () => {
  return (
    <div className="p-5 h-screen">
        <div className=" flex justify-between gap-5 ">
      {Products.map((product) => {
        return (
          <div className="">
            <ProductCard
              name={product.name}
              image={product.image}
              age={product.age}
              price={product.price}
              gene={product.gene}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Product;
