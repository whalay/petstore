import { ReactComponent as Cart } from "../assets/images/cart.svg";
import Product from "./Product";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import ProductForm from "./ProductForm";

const ProductCard = ({ image, age, name, price, gene, id, amount }) => {
  const cartCtx = useContext(CartContext);
  const prices = `$${price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount:amount,
    });
  };
  return (
    <div>
      <div className=" border rounded-2xl p-2  drop-shadow-xl">
        <div>
          <Link to={`product/${id}`}>
            <img
              src={image}
              alt=""
              className="rounded-2xl  object-fill w-full"
            />
          </Link>
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
            <h3 className="text-md font-bold">{prices}</h3>
            {/* <button
              onClick={addToCartHandler}
              className="border px-1 pt-1 font-bold rounded-2xl bg-slate-600"
            >
              Add to cart
            </button> */}
            <ProductForm onAddToCart={addToCartHandler}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
