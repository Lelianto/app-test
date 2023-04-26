import React from "react";
import { FcLike } from "react-icons/fc";
import { useParams } from "react-router-dom";

const AvatarCard = () => {
  const { id } = useParams();
  return (
    <div className="relative border border-neutral-300 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-3">
        <div className="font-medium text-base">
          Avatar name “Avatown” -nice original avatar of Avatown
        </div>
        <div>
          <FcLike />
        </div>
      </div>
      {id && (
        <img
          src={require(`src/assets/products/VRC-${id}.png`)}
          alt="product-detail"
          className="transform hover:scale-150 md:hover:scale-125 transition-all duration-300"
        />
      )}
    </div>
  );
};

export default AvatarCard;
