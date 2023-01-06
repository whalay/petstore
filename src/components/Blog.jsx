import React from "react";
import blgimg from "../assets/images/blog/blog1.svg";
import blgimg2 from "../assets/images/blog/blog2.svg";
import blgimg3 from "../assets/images/blog/blog3.svg";

const Blog = () => {
  return (
    <div className="p-5">
      <div>
        {" "}
        <h4>You already know ?</h4>
        <h1 className="text-[#003459] font-bold text-2xl">
          Useful pet knowledge
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-5">
        <div className="flex flex-col gap-y-3 p-4  rounded-2xl shadow-2xl ">
          <img src={blgimg} alt="" className="object-auto rounded-2xl" />
          <h2 className="font-bold text-xl">
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
            in recusandae eaque facere voluptatibus fugiat dolorem tempora,
            nesciunt reprehenderit quidem nobis perferendis possimus voluptatum
            repellendus aspernatur hic. Assumenda, optio?
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-4  rounded-2xl shadow-2xl">
          <img src={blgimg2} alt="" className="object-auto rounded-2xl" />
          <h2 className="font-bold text-xl">
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
            in recusandae eaque facere voluptatibus fugiat dolorem tempora,
            nesciunt reprehenderit quidem nobis perferendis possimus voluptatum
            repellendus aspernatur hic. Assumenda, optio?
          </p>
        </div>
        <div className="flex flex-col gap-y-3 p-4  rounded-2xl shadow-2xl">
          <img src={blgimg3} alt="" className="object-auto rounded-2xl" />
          <h2 className="font-bold text-xl">
            What is a Pomeranian? How to Identify Pomeranian Dogs
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea adipisci
            in recusandae eaque facere voluptatibus fugiat dolorem tempora,
            nesciunt reprehenderit quidem nobis perferendis possimus voluptatum
            repellendus aspernatur hic. Assumenda, optio?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
