import React, { useEffect } from "react";
import Headers from "src/components/organisms/Headers";
import BottomTabs from "src/components/organisms/BottomTabs";
import AvatarCard from "src/components/molecules/AvatarCard";
import AvatarDescription from "src/components/molecules/AvatarDescription";
import { useParams, useNavigate } from "react-router-dom";
import Productlist from "src/components/organisms/ProductList";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const images = new Array(4).fill("");

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
              </div>
              <div className="col-span-4 md:px-3 relative">
                <AvatarDescription />
              </div>
            </div>
            <div className="mt-10 mb-6">
              <div className="border border-neutral-300 rounded-xl p-3 mb-3">
                <div className="text-lg mb-3 font-medium">See more Avatars</div>
                <Productlist images={images} page={0} />
              </div>
            </div>
          </div>
          <BottomTabs />
        </div>
      )}
    </>
  );
};

export default Detail;
