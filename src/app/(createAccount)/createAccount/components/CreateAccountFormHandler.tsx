"use client"

import React from 'react'
import AddressForm from './AddressForm';
import ProfileInfoForm from './ProfileInfoForm';
import MultiFormHandler from '@/app/components/form/MultiFormHandler';

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

const CreateAccountFormHandler = () => {

    return (
        <div className="max-w-[450px] w-full h-full flex overflow-hidden m-auto">
            <MultiFormHandler pages={forms} onSubmit={() => alert("Submitted form!")} />
        </div>
    )

}



export default CreateAccountFormHandler;