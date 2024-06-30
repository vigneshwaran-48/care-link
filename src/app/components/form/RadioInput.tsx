import React from "react";

type Option = {
  id: string;
  value: string;
  displayName: string;
};

interface Props {
  displayName?: string;
  name: string;
  value: string;
  options: Option[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioInput = ({
  displayName = "Select any one",
  name,
  value,
  options,
  onChange
}: Props) => {
  const optionElems = options.map((option) => {
    return (
      <label
        htmlFor={option.id}
        key={option.id}
        className="flex items-center mr-4 cursor-pointer"
      >
        <input
          id={option.id}
          onChange={onChange}
          type="radio"
          name={name}
          value={option.value}
          className="cursor-pointer"
          checked={option.value === value}
        />
        <p className="ml-1">{option.displayName}</p>
      </label>
    );
  });

  return (
    <div className="flex flex-col">
      <p className="font-bold text-primary-text">{displayName}</p>
      <div className="flex w-full py-2">{optionElems}</div>
    </div>
  );
};

export default RadioInput;
