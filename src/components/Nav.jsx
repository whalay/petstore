import React from "react";

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
        
          <div className="md:hidden  top-0 left-0 bg-white h-full w-96 fixed  z-50">
            <ul className="md:hidden flex flex-col justify-between gap-y-8 text-lg font-bold text-[#002A48] absolute left-5 top-10 z-50">
              <li>Home</li>
              <li>Category</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
     
        </div>
      )}
    </div>
  );
};

export default Nav;
