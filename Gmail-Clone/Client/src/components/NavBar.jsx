import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import GmailIcon from "../assets/Gmail.png";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between h-16 m-0 ">
        {/* Left Side */}
        <div className="flex items-center justify-between gap-1">
          <div className="m-2 hover:bg-gray-200 cursor-pointer rounded-full p-2.5">
            <RxHamburgerMenu size={20} />
          </div>
          <div className="w-8 cursor-pointer">
            <img src={GmailIcon} />
          </div>
          <div className="text-gray-400 m-3 text-2xl cursor-pointer">
            <h1>Gmail</h1>
          </div>
        </div>
         
         {/* SearchBar */}
        <div className="rounded-full bg-gray-100 p-3 w-1/2">
          <div className="flex gap-3 items-center cursor-pointer ">
            <IoMdSearch size={20} />

            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search mail"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex gap-2">
          <h1>Helo</h1>
          <h1>Helo</h1>
          <h1>Helo</h1>
          <h1>Helo</h1>
        </div>
      </div>
    </>
  );
};

export default NavBar;
