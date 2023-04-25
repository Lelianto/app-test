import React, { useState } from "react";
import logo from "src/assets/logo-inverse.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import SearchInput from "src/components/atoms/SearchInput";
import dummyUser from "src/assets/products/VRC-2.png";
import { useNavigate } from "react-router-dom";

const Headers = () => {
  const [search, setSearch] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="sticky z-50 top-0 w-full bg-purple-800 h-16 ontainer mx-auto px-4">
      <div className="flex items-center h-16 w-full justify-between">
        {!search && (
          <img
            onClick={() => navigate("/")}
            className="h-8 md:h-12"
            src={logo}
            alt="logo"
          />
        )}
        {!search && (
          <div className="text-white min-w-max w-1/2 text-center">
            <a
              href="http://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="hidden md:inline md:mr-2">Go To</span>
              Marketplace
            </a>
          </div>
        )}
        {search && (
          <div className="w-5/6 md:hidden">
            <SearchInput />
          </div>
        )}
        <div
          onClick={() => setSearch(!search)}
          className="block md:hidden bg-black rounded-full p-2"
        >
          {search ? (
            <IoMdClose className="h-6 w-6 text-white" />
          ) : (
            <AiOutlineSearch className="h-6 w-6 text-white" />
          )}
        </div>
        <div className="hidden md:flex items-center h-16 w-full justify-end">
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
