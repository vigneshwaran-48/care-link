import Image from "next/image";
import React from "react";

const RightBanner = () => {
  return (
    <div className="hidden h-full md:flex md:w-[50%] md:max-w-[550px] lg:max-w-[800px] bg-primary text-other-text flex-shrink-0 flex-col p-2 items-center justify-center">
      <Image
        src="/baby-sitting.png"
        width={400}
        height={100}
        alt="A women holding a baby"
        className="h-fit"
      />
      <h2 className="text-2xl font-semibold w-[80%] text-center">
        {
          "Finding the perfect caregiver for your little one has never been easier. At CareLink, we connect you with trusted experienced  babysitters who provide safe, loving care, giving you peace of mind while you're away. Join our community and discover the best care for your family's needs."
        }
      </h2>
    </div>
  );
};

export default RightBanner;
