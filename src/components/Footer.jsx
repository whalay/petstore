import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../database/NavLinks";
import { ReactComponent as Facebook } from "../assets/images/socials/facebook.svg";
import { ReactComponent as Instagram } from "../assets/images/socials/instagram.svg";
import { ReactComponent as Twitter } from "../assets/images/socials/twitter.svg";
import { ReactComponent as Youtube } from "../assets/images/socials/youtube.svg";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="bg-[#FCEED5] p-5 ">
      <div className="bg-[#002A48] text-white p-5 rounded-2xl md:flex flex-row gap-6 items-center">
        <h1 className="text-xl font-bold">
          Register now so you don't miss our programs
        </h1>
        <div className="bg-white p-5 my-3 flex flex-wrap items-center justify-center gap-4 rounded-2xl flex-grow">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter your Email"
            className="border flex-grow basis-3/5 p-3"
          />
          <button
            type="submit"
            className="bg-[#002A48] p-3 flex-grow rounded-2xl"
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div className="py-5 md:flex items-center justify-between p-1">
        <ul className="flex flex-row justify-between gap-3 md:gap-8 text-lg font-semibold text-[#002A48]">
          {NavLinks.map((nav) => (
            <Link to={nav.url}>
              {" "}
              <li>{nav.name}</li>
            </Link>
          ))}
        </ul>
        {/* <ul className="flex flex-row justify-between gap-3 md:gap-8 text-lg font-semibold text-[#002A48]">
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul> */}
        <div className="flex flex-row justify-center gap-8 py-5">
          {" "}
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
        </div>
      </div>
      <hr className="pb-4" />
      <div className="flex justify-center flex-col md:flex-row md:justify-between items-center gap-y-3 p-5  ">
        {" "}
        <Logo />
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>?? 2022 Monito. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
