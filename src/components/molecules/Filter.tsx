import React, { FC } from "react";
import Checkbox from "src/components/atoms/Checkbox";

export interface ICheckboxList {
  id: number;
  text: string;
  choosen: boolean;
}

interface IFilter {
  title?: string;
  checkboxes?: ICheckboxList[];
  setCheckboxes?: (contents: ICheckboxList[]) => void;
}

const Filter: FC<IFilter> = ({ title, checkboxes, setCheckboxes }) => {
  const handleCheckboxChange = (id: number, choosen: boolean) => {
    const newCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === id) {
        return { ...checkbox, choosen };
      } else {
        return checkbox;
      }
    });
    setCheckboxes(newCheckboxes);
  };
  return (
    <div className="container mx-auto">
      <div className="mb-2 font-bold text-sm">{title}</div>
      {checkboxes.map((checkbox, index) => (
        <div key={`${checkbox.text}-${index}`} className="mb-2 ml-3">
          <Checkbox
            title={title}
            key={checkbox.id}
            id={`${checkbox.text}-${index}`}
            label={checkbox.text}
            checked={checkbox.choosen}
            onChange={(checked) => handleCheckboxChange(checkbox.id, checked)}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
