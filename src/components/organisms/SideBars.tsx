import React, { FC } from "react";
import Filter from "src/components/molecules/Filter";
import { IFilterList } from "src/pages/Home";

interface ISideBar {
  filters: IFilterList[];
}

const SideBar: FC<ISideBar> = ({ filters }) => {
  return (
    <div className="pt-4 md:h-screen overflow-y-scroll">
      {filters.map((filter, index) => (
        <div key={`filter-${index}`}>
          <Filter
            title={filter.title}
            checkboxes={filter.contents}
            setCheckboxes={filter.function}
          />
          <div className="py-2" />
        </div>
      ))}
    </div>
  );
};

export default SideBar;
