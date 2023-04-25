import React, { useState } from "react";

interface ICheckbox {
  title: string;
  id: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<ICheckbox> = ({
  title,
  label,
  checked,
  onChange,
  id,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    setIsChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        id={id}
        className={`h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded-lg ${
          title === "Category" ? "hidden" : "mr-1"
        }`}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
