import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  isRight?: boolean;
  heading: string;
  content: string;
}

const FeatureSection = ({ image, isRight = true, heading, content }: Props) => {
  return (
    <div className="my-[50px] w-full">
      <h2 className="text-[36px] font-bold py-2">{heading}</h2>
      <div className="grid grid-rows-2 space-between sm:grid-cols-3 sm:grid-rows-1">
        {isRight && (
          <p className="text-[24px] col-span-2 p-1 leading-relaxed flex items-center">
            {content}
          </p>
        )}
        <div className={`col-span-2 sm:col-span-1`}>
          <Image width={400} height={100} src={image} alt={image} />
        </div>
        {!isRight && (
          <p className="text-[24px] col-span-2 p-1 leading-relaxed  flex items-center">
            {content}
          </p>
        )}
      </div>
    </div>
  );
};

export default FeatureSection;
