import React from "react";
import { FcLike } from "react-icons/fc";

const Rating = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-yellow-500">&#9733;</span>
        <span className="text-yellow-500">&#9733;</span>
        <span className="text-yellow-500">&#9733;</span>
        <span className="text-yellow-500">&#9733;</span>
        <span className="text-yellow-500">&#9733;</span>
        <div className="ml-2 text-xs text-grey-1">4.7 & 100 Likes</div>
      </div>
      <FcLike />
      {/* <FcLikePlaceholder /> */}
    </div>
  );
};

export default Rating;
