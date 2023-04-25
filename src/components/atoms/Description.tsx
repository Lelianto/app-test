import React from "react";
import arrowUp from "src/assets/arrow-up.png";

const Description = () => {
  return (
    <>
      <div className="font-medium">
        <span className="text-xs">$</span>
        <span className="ml-1 text-2xl">50.00</span>
      </div>
      <div className="flex items-center">
        <div className="bg-cyan-400 text-cyan-400 w-4 h-4 rounded-full">.</div>
        <div className="text-sm ml-2">PC Only</div>
      </div>
      <div className="text-xs flex items-center">
        Auto upload service ready, you can use this avatar within 24 hours.
        <img className="h-5 w-3 ml-1" src={arrowUp} alt="arrow-up" />
      </div>
    </>
  );
};

export default Description;
