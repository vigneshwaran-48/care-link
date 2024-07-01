import React from "react";
import ProfileInfoForm from "./components/ProfileInfoForm";
import AddressForm from "./components/AddressForm";
import FormHandler from "./components/FormHandler";

const page = () => {

  return (
    <div className="w-full h-full flex items-center translate-y-[-5%]">
        <FormHandler />
    </div>
  );
};

export default page;
