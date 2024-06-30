import React from "react";
import ProfileInfoForm from "./components/ProfileInfoForm";
import AddressForm from "./components/AddressForm";

const page = () => {

  return (
    <div className="w-full h-full flex items-center translate-y-[-5%]">
        {/* <ProfileInfoForm /> */}
        <AddressForm />
    </div>
  );
};

export default page;
