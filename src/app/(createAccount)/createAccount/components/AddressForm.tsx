"use client";

import Dropdown from "@/app/components/form/Dropdown";
import TextInput from "@/app/components/form/TextInput";
import countries from "@/util/countries";
import React, { useState } from "react";

const countryOptions = countries.map(country => ({ displayName: country, value: country }));

const AddressForm = () => {
  const [address, setAddress] = useState({
    street: "",
    country: "India",
    state: "",
    city: "",
    zipCode: 0
  });

  const handleDropdownChange = (name: string, value: string) => {
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  return (
    <div className="max-w-[450px] w-full p-4 m-auto">
      <h2 className="text-3xl font-bold text-primary-text">Address</h2>
      <form>
        <TextInput
          id="street"
          name="street"
          displayName="Street Address"
          value={address.street}
          onChange={handleChange}
          placeHolder="No 11/25, sp colony"
          className="my-[30px]"
        />
        <TextInput
          id="state"
          name="state"
          displayName="State/Province/Region"
          value={address.state}
          onChange={handleChange}
          placeHolder="Tamilnadu"
          className="my-[30px]"
        />
        <TextInput
          id="city"
          name="city"
          displayName="City"
          value={address.city}
          onChange={handleChange}
          placeHolder="Chennai"
          className="my-[30px]"
        />
        <TextInput
          id="zipCode"
          name="zipCode"
          displayName="Postal Code/ZIP Code"
          value={address.zipCode}
          onChange={handleChange}
          placeHolder="600118"
          className="my-[30px]"
          isNumber
        />
        <Dropdown
          options={countryOptions}
          value={address.country}
          onChange={(value) => handleDropdownChange("country", value)}
          displayName="Country"
        />
        <button className="text-other-text bg-other-bg border-none rounded p-2 w-full text-[20px] mt-7">Submit</button>
      </form>
    </div>
  );
};

export default AddressForm;
