import React, { FC } from "react";
import dummyUser from "src/assets/products/VRC-2.png";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsCartPlus } from "react-icons/bs";
import { BiFilterAlt } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";

interface IBottomTabs {
  showSideBar?: boolean;
  setShowSidebar?: (value: boolean) => void;
}

const BottomTabs: FC<IBottomTabs> = ({ showSideBar, setShowSidebar }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 grid grid-cols-4 gap-1 bg-purple-800 h-16 rounded-t-xl">
      <div className="flex items-center justify-center">
        <div
          onClick={() => (id ? navigate("/") : setShowSidebar(!showSideBar))}
          className="bg-black p-2 rounded-lg max-w-min border border-white"
        >
          {id ? (
            <AiOutlineHome className="text-white text-xl" />
          ) : (
            <>
              {showSideBar ? (
                <IoMdClose className="text-white text-xl" />
              ) : (
                <BiFilterAlt className="text-white text-xl" />
              )}
            </>
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
