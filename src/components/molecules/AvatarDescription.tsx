import React from "react";
import Provider from "src/components/atoms/Provider";
import Rating from "src/components/atoms/Rating";

const AvatarDescription = () => {
  return (
    <>
      <div className="text-lg text-blue-400 py-3 font-medium">
        Unique avatar characters
      </div>
      <div className="text-4xl font-bold pb-3">Avatown - Original</div>
      <div className="flex mb-3">
        <span className="mr-2">Owned By</span> <Provider />
      </div>
      <div className="border border-neutral-300 rounded-xl p-3 mb-3">
        <div className="text-lg mb-3 font-medium">Description</div>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their
        infancy. Various versions have evolved over the years, sometimes by
        accident, sometimes on purpose (injected humour and the like).
      </div>
      <Rating />
      <div className="xl:absolute -bottom-2 left-3 mt-3">
        <span className="text-2xl">Price $</span>{" "}
        <span className="text-8xl font-bold">50.00</span>
      </div>
    </>
  );
};

export default AvatarDescription;
