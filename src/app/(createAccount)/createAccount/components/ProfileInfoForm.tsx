"use client";

import RadioInput from "@/app/components/form/RadioInput";
import TextInput from "@/app/components/form/TextInput";
import { setPage } from "@/lib/features/createAccountSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useState } from "react";

const roleRadioData = [
  {
    id: "caretaker-id",
    value: "careTaker",
    displayName: "Care Taker",
  },
  {
    id: "customer-id",
    value: "customer",
    displayName: "Need Care Services",
  },
];

const ProfileInfoForm = () => {

  const dispatch = useAppDispatch();

  const page = useAppSelector(state => state.createAccountSlice.currentPage);

  const [userData, setUserData] = useState({
    name: "",
    age: 18,
    role: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="w-full p-4 m-auto">
      <h2 className="text-3xl font-bold text-primary-text">
        Tell us about yourself
      </h2>
      <form>
        <TextInput
          id="name"
          value={userData.name}
          onChange={handleChange}
          name="name"
          displayName="Name"
          className="my-7"
        />
        <TextInput
          id="age"
          value={userData.age}
          onChange={handleChange}
          name="age"
          displayName="Age"
          isNumber
          className="my-7"
        />
        <RadioInput
          name="role"
          value="customer"
          displayName="What is your purpose of using this app"
          options={roleRadioData}
          onChange={handleChange}
        />
        <button 
          className="text-other-text bg-other-bg border-none rounded p-2 w-full text-[20px] mt-7"
          onClick={() => dispatch(setPage(page + 1))}
          type="button"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
