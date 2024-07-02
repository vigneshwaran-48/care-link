import React from "react";
import ProfileInfoForm from "./components/ProfileInfoForm";
import AddressForm from "./components/AddressForm";
import MultiFormHandler from "@/app/components/form/MultiFormHandler";

const forms = [
  {
    index: 1,
    element: <ProfileInfoForm />
  },
  {
    index: 2,
    element: <AddressForm />
  }
];

const page = () => {

  return (
    <div className="w-full h-full flex items-center translate-y-[-5%]">
        <div className="max-w-[450px] w-full h-full flex">
          <MultiFormHandler pages={forms} />
        </div>
    </div>
  );
};

export default page;
