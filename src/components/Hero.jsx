import React from "react";
import { ReactComponent as HeroImg } from "../assets/images/herom.svg";
import heroImage from "../assets/images/herop.png";
import { ReactComponent as Play } from "../assets/images/play.svg";

const Hero = () => {
  return (
    <div className="h-full w-screen bg-[#FCEED5]   flex flex-col md:flex-row gap-10">
      <div className="flex p-5  basis-2/5 flex-col gap-y-3">
        <h1 className="text-3xl text-[#002A48] font-bold">One more friend</h1>
        <h2 className="text-xl text-[#002A48] font-semibold">
          Thousands more fun!
        </h2>
        <p className="text-md ">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex gap-5">
          <span className="flex flex-row items-center justify-between gap-3 text-[#003459] border border-[#003459] py-2  px-3 md:px-7 rounded-3xl">
            {" "}
            <button className=" ">View intro</button>
            <Play className="border rounded-full border-[#003459]" />
          </span>
          <button className="bg-[#003459] text-white border py-2 px-3 md:px-7 rounded-3xl">
            Explore now
          </button>
        </div>
      </div>
      <div className="h-full basis-3/5">
        <div className="bg-[url('src/assets/images/herorec.svg')] bg-cover h-96 flex justify-center">
          <img src={heroImage} alt="" className="z-10 absolute  text-center " />
          {/* <HeroImg className="z-10 absolute  text-center " /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
