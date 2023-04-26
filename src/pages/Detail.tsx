import React, { useEffect, useState } from "react";
import Headers from "src/components/organisms/Headers";
import BottomTabs from "src/components/organisms/BottomTabs";
import AvatarCard from "src/components/molecules/AvatarCard";
import AvatarDescription from "src/components/molecules/AvatarDescription";
import { useParams, useNavigate } from "react-router-dom";
import Productlist from "src/components/organisms/ProductList";
import TabMenus from "src/components/molecules/TabMenus";
import ProductReviews from "src/components/molecules/ProductReviews";
import ShareDropdown from "src/components/molecules/ShareDropdown";
import AddToCartAnim from "src/components/atoms/AddToCartAnim";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const images = new Array(4).fill("");
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleAddToCart = () => {
    setIsOpen(true);
    // setTimeout(handleClose, 3000); // close the modal after 3 seconds
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!id) {
      navigate("/");
    }
    scrollToTop();
  }, [id, navigate]);
  return (
    <>
      {!id ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Headers />
          <div className="container mx-auto px-4 lg:px-1 pb-20 lg:pb-0">
            <div className="pt-6 grid grid-cols-1 lg:grid-cols-7 gap-2">
              <div className="col-span-3">
                <AvatarCard />
                <div className="flex justify-end mt-4">
                  <ShareDropdown />
                </div>
              </div>
              <div className="col-span-4 md:px-3 relative">
                <AvatarDescription handleAddToCartAnim={handleAddToCart} />
              </div>
            </div>
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-7 gap-2">
              <div className="col-span-3 md:px-3">
                <TabMenus />
              </div>
              <div className="col-span-4 md:px-3">
                <ProductReviews />
              </div>
            </div>
            <div className="mt-10 mb-6">
              <div className="border border-neutral-300 rounded-xl p-3 mb-3">
                <div className="text-lg mb-3 font-medium">See more Avatars</div>
                <Productlist
                  handleAddToCartAnim={handleAddToCart}
                  images={images}
                  page={0}
                />
              </div>
            </div>
          </div>
          <BottomTabs />
        </div>
      )}
      {isOpen && <AddToCartAnim handleClose={handleClose} />}
    </>
  );
};

export default Detail;
