import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full py-1 pr-8 pl-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="absolute top-0 right-0 px-2 py-1">
        <AiOutlineSearch className="h-6 w-6 text-gray-400" />
      </div>
    </div>
  );
};

export default SearchInput;
