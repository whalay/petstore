import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Product from "../components/Product";
import Cart from "../components/cart/Cart";
import Banner from "../components/Banner";
import Blog from "../components/Blog";
import Footer from "../components/Footer";

const Homepage = ({onShowCart}) => {
  return (
    <div>
      <Navbar onShowCart={onShowCart}/>
      <Hero />
      <Product />
      <Banner />
      <Blog />
      <Footer />
    </div>
  );
};

export default Homepage;
