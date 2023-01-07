import React from "react";
import { ReactComponent as Close } from "../assets/images/close.svg";

const Nav = (props) => {
  return (
    <div>
      <ul className="md:flex flex-row justify-between gap-10 text-lg font-bold text-[#002A48] hidden">
        <li>Home</li>
        <li>Category</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      {props.nav && (
        <div className="md:hidden  top-0 left-0 bg-white h-full w-96 fixed  z-50 ">
          <div className="flex justify-between p-10">
          <ul className="md:hidden flex flex-col justify-between gap-y-8 text-lg font-bold text-[#002A48] ">
            <li>Home</li>
            <li>Category</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <Close />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
