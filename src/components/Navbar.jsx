import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import logo from "../assets/images/logo.svg";
import { ReactComponent as Hamburger } from "../assets/images/hamburger.svg";
import { ReactComponent as Cart } from "../assets/images/cart.svg";
import HeaderCartButton from "./HeaderCartButton";
import Nav from "./Nav";
import Search from "./Search";

const Navbar = ({ onShowCart }) => {
  const [nav, setNav] = useState(false);

  const navHandler = () => {
    setNav((nav) => !nav);
  };
  return (
    <div className="flex justify-between items-center p-5 bg-[#FCEED5]">
      <Hamburger className="md:hidden" onClick={navHandler} />
      {/* <Link to="/">
        <Logo />
      </Link> */}
      <img src={logo} alt="" />
      <Nav nav={nav} showNav={navHandler}/>
      <Search />
      <HeaderCartButton onClick={onShowCart}  />
    </div>
  );
};

export default Navbar;
