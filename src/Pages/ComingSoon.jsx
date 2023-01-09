import React from "react";
import { ReactComponent as Rocket } from "../assets/images/rocket.svg";

const ComingSoon = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#FCEED5]">
    
      <Rocket className=""/>
      <h1 className="text-4xl font-bold text-black">COMING SOON</h1>
    </div>
  );
};

export default ComingSoon;
