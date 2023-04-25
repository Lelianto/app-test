import React, { FC } from "react";
import dummyUser from "src/assets/products/VRC-2.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";

interface IBottomTabs {
  showSideBar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const BottomTabs: FC<IBottomTabs> = ({ showSideBar, setShowSidebar }) => {
  return (
    <div className="block md:hidden sticky bottom-0 grid grid-cols-4 gap-1 bg-purple-800 h-16 rounded-t-xl">
      <div className="flex items-center justify-center">
        <div
          onClick={() => setShowSidebar(!showSideBar)}
          className="bg-black p-2 rounded-lg max-w-min border border-white"
        >
          {showSideBar ? (
            <IoMdClose className="text-white text-xl" />
          ) : (
            <BiFilterAlt className="text-white text-xl" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative bg-black p-2 rounded-lg max-w-min border border-white">
          <IoNotificationsOutline className="text-white text-xl" />
          <div className="text-white bg-red-500 absolute -top-1 -right-1 rounded-full text-xs h-4 w-4 flex items-center justify-center">
            3
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="relative bg-black p-2 rounded-lg max-w-min border border-white">
          <BsCartPlus className="text-white text-xl" />
          <div className="text-white bg-red-500 absolute -top-1 -right-1 rounded-full text-xs h-4 w-4 flex items-center justify-center">
            1
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          className="h-9 rounded-md border-2 border-white"
          src={dummyUser}
          alt="user"
        />
      </div>
    </div>
  );
};

export default BottomTabs;
