import Image from 'next/image';
import React from 'react'

const page = () => {
    return (
        <div className="w-full h-full relative text-other-text">
            <div className="flex justify-around">
                <p>Finding the perfect caregiver for your little one has never been easier. At CareLink, we connect you with trusted, experienced babysitters who provide safe, loving care, giving you peace of mind while you're away. Join our community and discover the best care for your family's needs.</p>
                <Image 
                    src="/baby-sitting.png"
                    width={400}
                    height={100}
                    alt="A women holds a baby"
                    // className=""
                />
            </div>
        </div>
    )
}

export default page;