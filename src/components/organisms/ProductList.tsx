import React, { FC } from "react";
import Product from "src/components/molecules/Product";

interface IProductlLst {
  images?: string[];
  page?: number;
  handleAddToCartAnim: () => void;
}

const Productlist: FC<IProductlLst> = ({
  images,
  page,
  handleAddToCartAnim,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      {images.map((_, index) => (
        <div key={`product-${index}`} className="cursor-pointer">
          <Product
            image={require(`src/assets/products/VRC-${page + index}.png`)}
            route={`/detail/${page + index}`}
            handleAddToCartAnim={handleAddToCartAnim}
          />
        </div>
      ))}
    </div>
  );
};

export default Productlist;
