import React from "react";
import { ReactComponent as Facebook } from "../assets/images/socials/facebook.svg";
import { ReactComponent as Instagram } from "../assets/images/socials/instagram.svg";
import { ReactComponent as Twitter } from "../assets/images/socials/twitter.svg";
import { ReactComponent as Youtube } from "../assets/images/socials/youtube.svg";

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
      <div className="py-5">
        <ul className="flex flex-row justify-between gap-10 text-lg font-bold text-[#002A48] ">
          <li>Home</li>
          <li>Category</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex flex-row justify-center gap-8 py-5">
          {" "}
          <Facebook />
          <Twitter />
          <Instagram />
          <Youtube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
