import Image from "next/image";
import React from "react";
import FeatureSection from "./components/FeatureSection";

const featureSections = [
  {
    image: "/baby-sitting.png",
    heading: "Baby Sitting",
    content:
      "Finding the perfect caregiver for your little one has never been easier. At CareLink, we connect you with trusted experienced  babysitters who provide safe, loving care, giving you peace of mind while you're away. Join our community and discover the best care for your family's needs.",
    isRight: true,
    alt: "A women holding a baby"
  },
  {
    image: "/pet-sitting.png",
    heading: "Pet Sitting",
    content:
      "Leave your furry friends in safe hands with CareLink. Our trusted and experienced pet sitters provide the love and care your pets deserve while you're away. Join our community today and ensure your pets receive the best care possible.",
    isRight: false,
    alt: "A girl waling with a dog"
  },
];

const page = () => {
  const featureSectionElems = featureSections.map((feature, key) => {
    return (
      <FeatureSection
        key={key}
        image={feature.image}
        heading={feature.heading}
        content={feature.content}
        isRight={feature.isRight}
      />
    );
  });

  return (
    <div className="w-full h-full max-w-[1000px] m-auto text-other-text flex flex-col items-center">
      {featureSectionElems}
    </div>
  );
};

export default page;
