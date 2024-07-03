"use client";

import RadioInput from "@/app/components/form/RadioInput";
import TextInput from "@/app/components/form/TextInput";
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
    <div className="w-full p-4">
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
      </form>
    </div>
  );
};

export default ProfileInfoForm;
