import React from "react";
import { ReactComponent as Dog } from "../assets/images/dog1.svg";
import dog1 from "../assets/images/dog1.svg";
import dog2 from "../assets/images/dog2.svg";

import { ReactComponent as Cart } from "../assets/images/cart.svg";
import ProductCard from "./ProductCard";
import {Products} from "../database/products"

// const Products = [
//   {
//     id: 1,
//     image: dog1,
//     name: "MO231 - Pomeranian White",
//     gene: "maale",
//     age: "2 years",
//     price: "$2.00",
// url: 'product/1'
//   },
//   {
//     id: 2,
//     image: dog2,
//     name: "MO231 - Pomeranian White",
//     gene: "maale",
//     age: "2 years",
//     price: "$2.00",
//     url: 'product/2'
//   },
// ];

const Product = () => {
  return (
    <div className="p-6 h-full">
        <div className=" flex flex-wrap justify-between gap-2 ">
      {Products.map((product) => {
        return (
          <div className="">
            <ProductCard
            id={product.id}
              name={product.name}
              image={product.image}
              age={product.age}
              price={product.price}
              gene={product.gene}
              amount ={product.amount}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Product;
