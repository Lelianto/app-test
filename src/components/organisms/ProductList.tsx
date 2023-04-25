import React, { FC } from "react";
import Product from "src/components/molecules/Product";
import { useNavigate } from "react-router-dom";

interface IProductlLst {
  images?: string[];
  page?: number;
}

const Productlist: FC<IProductlLst> = ({ images, page }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {images.map((_, index) => (
        <div
          key={`product-${index}`}
          className="cursor-pointer"
          onClick={() => navigate(`/detail/${page + index}`)}
        >
          <Product
            image={require(`src/assets/products/VRC-${page + index}.png`)}
          />
        </div>
      ))}
    </div>
  );
};

export default Productlist;
