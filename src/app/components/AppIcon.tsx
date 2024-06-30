import Image from "next/image";
import React from "react";

const AppIcon = ({ isLight = false }: { isLight: boolean }) => {
  return (
    <Image
      src={`/app-${isLight ? "light" : "dark"}-icon.png`}
      width={170}
      height={30}
      alt="App Icon"
    />
  );
};

export default AppIcon;
