import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Option = {
  displayName: string;
  value: string;
  onSelect?: (id: string) => void;
};

interface Props {
  displayName?: string;
  value: string;
  options: Option[];
  onChange: (value: string) => void;
}

const OptionComp = ({ displayName, value, onSelect = () => {} }: Option) => {
  return (
    <li className="cursor-pointer p-2 transition duration-100 bg-white hover:bg-other-bg hover:text-other-text" onClick={() => onSelect(value)}>
      {displayName}
    </li>
  );
};

const Dropdown = ({
  displayName = "Select",
  value,
  options,
  onChange,
}: Props) => {
  const optionElems = options.map((option) => {
    return (
      <OptionComp
        key={option.value}
        displayName={option.displayName}
        value={option.value}
        onSelect={onChange}
      />
    );
  });

  return (
    <div className="flex text-primary-text w-full justify-between items-center">
      <p className="text-[20px] font-bold">{displayName}</p>
      <div className="relative  w-[200px]">
        <div
          tabIndex={0}
          className="peer cursor-pointer bg-white w-full text-center p-2 flex justify-between items-center"
        >
          <p className="mx-4">
            {options.find((option) => option.value === value)?.displayName}
          </p>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <ul
          className={`w-full absolute top-[105%] h-0 overflow-hidden peer-focus:h-[200px] transition-all duration-500 overflow-y-scroll hide-scrollbar rounded`}
        >
          {optionElems}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
