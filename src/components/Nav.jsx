import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../database/NavLinks";
import { ReactComponent as Close } from "../assets/images/close.svg";

const Nav = (props) => {
  return (
    <div>
      <ul className="md:flex flex-row justify-between gap-10 text-lg font-bold text-[#002A48] hidden">
        {NavLinks.map((nav) => (
          <Link to={nav.url}>
            {" "}
            <li>{nav.name}</li>
          </Link>
        ))}
      </ul>
      {props.nav && (
        <div className="md:hidden  top-0 left-0 bg-white h-full w-96 fixed  z-50 transition ease-in-out duration-700 ">
          <div className="flex justify-between p-10">
            <ul className="md:hidden flex flex-col justify-between gap-y-8 text-lg font-bold text-[#002A48] ">
              {NavLinks.map((nav) => (
                <Link to={nav.url}>
                  {" "}
                  <li onClick={props.closeNavbar}>{nav.name}</li>
                </Link>
              ))}
            </ul>
            <Close onClick={props.closeNavbar} className="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
