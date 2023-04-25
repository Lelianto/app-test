import React from "react";
import logo from "src/assets/logo.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import SearchInput from "src/components/atoms/SearchInput";
import dummyUser from "src/assets/products/VRC-2.png";

const Headers = () => {
  return (
    <div className="sticky z-50 top-0 w-full bg-purple-800 h-16 ontainer mx-auto px-4">
      <div className="flex items-center h-16 w-full justify-between">
        <img className="h-12" src={logo} alt="logo" />
        <div className="text-white min-w-max w-1/2 text-center">
          <a href="http://google.com" target="_blank" rel="noopener noreferrer">
            Go To Marketplace
          </a>
        </div>
        <div className="flex items-center h-16 w-full justify-end">
          <div className="w-3/4">
            <SearchInput />
          </div>
          <div className="relative bg-black p-2 rounded-lg ml-3">
            <IoNotificationsOutline className="text-white text-xl" />
            <div className="text-white bg-red-500 absolute -top-1 -right-1 rounded-full text-xs h-4 w-4 flex items-center justify-center">
              3
            </div>
          </div>
          <div className="relative bg-black p-2 rounded-lg ml-3">
            <BsCartPlus className="text-white text-xl" />
            <div className="text-white bg-red-500 absolute -top-1 -right-1 rounded-full text-xs h-4 w-4 flex items-center justify-center">
              1
            </div>
          </div>
          <div className="ml-3 min-w-max">
            <img
              className="h-9 rounded-md border border-white"
              src={dummyUser}
              alt="user"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
