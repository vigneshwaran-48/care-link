"use client"

import { useAppSelector } from '@/lib/hooks'
import React, { ReactElement } from 'react'
import AddressForm from './AddressForm';
import ProfileInfoForm from './ProfileInfoForm';


const FormHandler = () => {

    const page = useAppSelector(state => state.createAccountSlice.currentPage);


    return (
        <div className="relative max-w-[450px] w-full h-full overflow-hidden flex">
            <div className={`absolute w-full h-full flex-shrink-0 transition-transform duration-500 transform ${page === 1 ? 'translate-x-0' : page === 2 ? 'translate-x-full' : 'translate-x-2/3'}`}>
                <ProfileInfoForm />
            </div>
            <div className={`absolute w-full h-full flex-shrink-0 transition-transform duration-500 transform ${page === 2 ? 'translate-x-0' : page < 2 ? 'translate-x-full' : '-translate-x-full'}`}>
                <AddressForm />
            </div>
            <div className={`absolute w-full h-full flex-shrink-0 transition-transform duration-500 transform ${page === 3 ? 'translate-x-0' : 'translate-x-full'}`}>
                <p>HI</p>
                <ProfileInfoForm />
            </div>
        </div>
    );

}



export default FormHandler;