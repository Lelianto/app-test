import React from "react";
import defaultAvatar from "src/assets/products/VRC-0.png";

const Provider = () => {
  return (
    <div className="flex items-center">
      <img className="w-6 h-6 rounded-full" src={defaultAvatar} alt="avatar" />
      <div className="ml-2 text-xs text-grey-1">Avatar Joe’s</div>
    </div>
  );
};

export default Provider;
