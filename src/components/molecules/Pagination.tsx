import React, { FC } from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface IPagination {
  page?: number;
  totalPage?: string[];
  handlePagination: (actions?: string, newPage?: number) => void;
}

const Pagination: FC<IPagination> = ({ page, totalPage, handlePagination }) => {
  return (
    <div className="flex justify-center items-center mt-8 mb-24 md:my-8">
      <button type="button" onClick={() => handlePagination("back")}>
        <MdOutlineArrowBackIos />
      </button>
      {totalPage.map((_, index) => (
        <button
          className={`mx-1 w-6 h-8 rounded-sm ${
            page === index ? "bg-grey-2" : ""
          }`}
          type="button"
          key={`button-${index}`}
          onClick={() => handlePagination("", index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button type="button" onClick={() => handlePagination("next")}>
        <MdOutlineArrowForwardIos />
      </button>
    </div>
  );
};

export default Pagination;
