import React, { FC } from "react";
import Rating from "src/components/atoms/Rating";
import Provider from "src/components/atoms/Provider";
import Description from "src/components/atoms/Description";
import { BsCartPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addToCart } from "src/stores/actionCreators";

interface IProduct {
  image?: string;
  route?: string;
}
const Product: FC<IProduct> = ({ image, route }) => {
  const dispatch: Dispatch<any> = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ count: 1 }));
  };
  const navigate = useNavigate();
  return (
    <div className="hover:shadow-lg bg-white rounded-md transform hover:relative lg:hover:z-40 lg:hover:scale-110 transition-all duration-300">
      <div className="relative overflow-hidden w-full h-full rounded-md">
        <img
          className="w-full rounded-md transform hover:scale-125 transition-all duration-300"
          src={image}
          alt="product"
          onClick={() => navigate(`${route}`)}
        />
        <div
          onClick={handleAddToCart}
          className="absolute cursor-pointer top-2 right-2 flex items-center text-white bg-blue-600 rounded-lg py-1 px-2 font-bold"
        >
          <BsCartPlus />
          <div className="ml-2 text-sm">Add</div>
        </div>
      </div>
      <div onClick={() => navigate(`${route}`)} className="p-2 rounded-b-md">
        <div className="font-medium text-base">
          Avatar name “Avatown” -nice original avatar of Avatown
        </div>
        <Rating />
        <Provider />
        <Description />
      </div>
    </div>
  );
};

export default Product;
