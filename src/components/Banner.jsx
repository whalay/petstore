import React from "react";
import { ReactComponent as Play } from "../assets/images/play.svg";
import horizontal from "../assets/images/horizontal.svg";


const Banner = () => {
  return (
    <div className=" bg-[url('./assets/images/bann.png')]  bg-contain bg-no-repeat md:bg-none md:h-[73vh]  bg-[#002A48] m-5  flex flex-col md:flex-row-reverse items-center text-center justify-center md:text-right   rounded-xl">
      <div className=" md:bg-[url('./assets/images/ban.png')]  bg-no-repeat bg-cover w-full  flex p-5 md:h-[73vh]  justify-center  text-center md:text-right basis-[100%] flex-col gap-y-3 z-50">
        <h1 className="text-3xl text-[#002A48] font-bold">One more friend</h1>
        <h2 className="text-xl text-[#002A48] font-semibold">
          Thousands more fun!
        </h2>
        <p className="text-md ">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-5  justify-end  ">
          <span className="flex flex-row   justify-between gap-3 text-[#003459] border border-[#003459] py-2 px-2 md:px-7 rounded-3xl">
            {" "}
            <button className=" ">View intro</button>
            <Play className="border rounded-full border-[#003459]" />
          </span>
          <button className="bg-[#003459] text-white border py-2 px-2 md:px-7 rounded-3xl">
            Explore now
          </button>
        </div>
      </div>
      <div className=" w-full md:bg-bg-[#002A48] z-10 flex justify-center">
        <img src={horizontal} alt="" className=" object-fill md:h-[73vh]" />
   
      </div>
    </div>
  );
};

export default Banner;
