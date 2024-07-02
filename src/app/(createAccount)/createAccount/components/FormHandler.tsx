"use client"

import { useAppSelector } from '@/lib/hooks'
import React, { ReactElement } from 'react'
import AddressForm from './AddressForm';
import ProfileInfoForm from './ProfileInfoForm';


const FormHandler = () => {

    const page = useAppSelector(state => state.createAccountSlice.currentPage);


    return (
        <div className="relative max-w-[450px] w-full h-full flex overflow-hidden">
            <div className={`w-full h-full flex transition-all duration-500 translate-x-[-${page * 450}px]`}>
                <div className={`w-full h-full flex-shrink-0`}>
                    <ProfileInfoForm />
                </div>
                <div className={`w-full h-full flex-shrink-0`}>
                    <AddressForm />
                </div>
                <div className={`w-full h-full flex-shrink-0`}>
                    <p>HI</p>
                    <ProfileInfoForm />
                </div>
            </div>
        </div>
    );

}



export default FormHandler;