"use client";

import React from "react";

interface Props {
  displayName?: string;
  placeHolder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  id: string;
  name: string;
  className?: string,
  isNumber?: boolean
}

const TextInput = ({
  displayName = "Text",
  placeHolder = "Enter a Text",
  onChange,
  value,
  id,
  name,
  className = "",
  isNumber = false
}: Props) => {
  return (
    <label htmlFor={id} className={`relative block w-full my-2 ${className}`}>
      <p className="absolute top-[-12px] left-[5px] bg-transparent text-gray-500">{displayName}</p>
      <input
        id={id}
        name={name}
        value={value}
        placeholder={placeHolder}
        onChange={onChange}
        className={`w-full h-full border-none outline-none bg-white p-2 py-4 text-[20px] rounded`}
        type={isNumber ? "number" : "text"}
      />
    </label>
  );
};

export default TextInput;
