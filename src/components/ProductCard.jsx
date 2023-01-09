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
      amount: 1,
    });
  };
  return (
    <div className="">
      <div className=" border rounded-2xl p-3  shadow-2xl flex   gap-4 md:flex-col">
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
          <div className="flex justify-between gap-5">
            <h1 className="text-md font-bold">{name}</h1>
            <h3 className="text-md font-bold">{prices}</h3>
          </div>
          <h3 className="text-[#667479] text-xm">
            Gene: <span className="font-medium">{gene}</span>{" "}
          </h3>
          <h3 className="text-[#667479] text-xm">
            Age: <span className="font-medium">{age}</span>
          </h3>
          <span className="flex items-center gap-9">
            {/* <h3 className="text-md font-bold">{prices}</h3> */}
            <button
              onClick={addToCartHandler}
              className="border px-2 py-2 font-bold rounded-2xl bg-[#FCEED5] hover:bg-[#003459] hover:text-white"
            >
              Add to cart
            </button>
            {/* <ProductForm onAddToCart={addToCartHandler}/> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
