import React, { useCallback, useState, Dispatch, SetStateAction } from "react";
import Headers from "src/components/organisms/Headers";
import BottomTabs from "src/components/organisms/BottomTabs";
import Productlist from "src/components/organisms/ProductList";
import Pagination from "src/components/molecules/Pagination";
import Select from "src/components/atoms/Select";
import SideBar from "src/components/organisms/SideBars";
import { ICheckboxList } from "src/components/molecules/Filter";
import AddToCartAnim from "src/components/atoms/AddToCartAnim";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "Featured", label: "Featured" },
  { value: "Price: Low to High", label: "Price: Low to High" },
  { value: "Price: High to Low", label: "Price: High to Low" },
  { value: "Customer Review", label: "Customer Review" },
  { value: "New", label: "New" },
  { value: "Polygon: Low to High", label: "Polygon: Low to High" },
  { value: "Polygon: High to Low", label: "Polygon: High to Low" },
];

const categoryList: ICheckboxList[] = [
  { id: 1, text: "Full avatar", choosen: false },
  { id: 2, text: "Others", choosen: false },
];

const contentList: ICheckboxList[] = [
  { id: 1, text: "VRChat(Quest)", choosen: false },
  { id: 2, text: "VRChat(PCVR)", choosen: false },
  { id: 3, text: "Others", choosen: false },
];

const priceList: ICheckboxList[] = [
  { id: 1, text: "Under $10", choosen: false },
  { id: 2, text: "$10 to $20", choosen: false },
  { id: 3, text: "$20 to $30", choosen: false },
  { id: 4, text: "$30 to $40", choosen: false },
  { id: 5, text: "$40 to $50", choosen: false },
  { id: 6, text: "$50 to $70", choosen: false },
  { id: 7, text: "$70 & above", choosen: false },
];

const polygonList: ICheckboxList[] = [
  { id: 1, text: "Under △7,500", choosen: false },
  { id: 2, text: "△7,500 to △10,000", choosen: false },
  { id: 3, text: "△10,000 to △15,000", choosen: false },
  { id: 4, text: "△15,000 to △20,000", choosen: false },
  { id: 5, text: "△20,000 to △32,000", choosen: false },
  { id: 6, text: "△32,000 to △70,000", choosen: false },
  { id: 7, text: "△70,000 & Above", choosen: false },
];

const supportList: ICheckboxList[] = [
  { id: 1, text: "Supported", choosen: false },
  { id: 2, text: "Unsupported", choosen: false },
];

export interface IFilterList {
  title: string;
  contents: ICheckboxList[];
  function: Dispatch<SetStateAction<ICheckboxList[]>>;
}

const Home = () => {
  const [page, setPage] = useState<number>(0);
  const [showSideBar, setShowSidebar] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [categories, setCategories] = useState<ICheckboxList[]>(categoryList);
  const [contents, setContents] = useState<ICheckboxList[]>(contentList);
  const [prices, setPrices] = useState<ICheckboxList[]>(priceList);
  const [polygons, setPolygons] = useState<ICheckboxList[]>(polygonList);
  const [supports, setSupports] = useState<ICheckboxList[]>(supportList);
  const filters: IFilterList[] = [
    {
      title: "Category",
      contents: categories,
      function: setCategories,
    },
    {
      title: "Contents",
      contents: contents,
      function: setContents,
    },
    {
      title: "Price",
      contents: prices,
      function: setPrices,
    },
    {
      title: "Polygon amount",
      contents: polygons,
      function: setPolygons,
    },
    {
      title: "Auto upload support",
      contents: supports,
      function: setSupports,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleAddToCartAnim = () => {
    setIsOpen(true);
    setTimeout(handleClose, 3000); // close the modal after 3 seconds
  };

  const handleOptionChange = (option: Option | null) => {
    setSelectedOption(option);
  };
  const perPage = 12;
  const images = new Array(23).fill("");

  // Calculate start and end indices based on the current page and number of items per page
  const startIndex = page * perPage;
  const endIndex = startIndex + perPage;
  const totalPage = Math.ceil(images.length / perPage);
  const arrTotalPage = new Array(totalPage).fill("");

  // Get the images to display for the current page
  const imagesToShow = images.slice(startIndex, endIndex);

  // Handle pagination logic
  const handlePagination = useCallback(
    (action?: string, newPage?: number) => {
      if (newPage !== undefined) {
        setPage(newPage - 1);
      } else if (action === "back" && page !== 0) {
        setPage(page - 1);
      } else if (action === "next" && endIndex < images.length) {
        setPage(page + 1);
      }
    },
    [page, images.length, endIndex]
  );
  return (
    <div>
      <Headers />
      <div className="container mx-auto px-4 lg:px-1">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
          <div
            className={`${
              showSideBar ? "" : "hidden"
            } lg:block col-span-1 lg:col-span-1`}
          >
            <div className="sticky top-16">
              <SideBar filters={filters} />
            </div>
          </div>
          <div className="col-span-4">
            <div className="flex items-center justify-between py-4">
              <div className="text-2xl font-medium">All Items</div>
              <div>
                <Select
                  options={options}
                  selectedOption={selectedOption}
                  onChange={handleOptionChange}
                  placeholder="Select a sorter"
                />
              </div>
            </div>
            <Productlist
              handleAddToCartAnim={handleAddToCartAnim}
              images={imagesToShow}
              page={startIndex}
            />
            <Pagination
              page={page}
              handlePagination={handlePagination}
              totalPage={arrTotalPage}
            />
          </div>
        </div>
      </div>
      <BottomTabs showSideBar={showSideBar} setShowSidebar={setShowSidebar} />
      {isOpen && <AddToCartAnim handleClose={handleClose} />}
    </div>
  );
};

export default Home;
