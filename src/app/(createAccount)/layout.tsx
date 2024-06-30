import React from "react";
import { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";
import RightBanner from "./components/RightBanner";
import AppIcon from "../components/AppIcon";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create account in CareLink",
};

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  console.log(poppins.className);

  return (
    <html lang="en" className={`w-full h-full ${poppins.className}`}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_io/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon_io/site.webmanifest" />
      </head>
      <body className="w-full h-full mode-light bg-neutral-bg">
        <main className="w-full h-full flex">
            <div className="w-full h-full flex flex-col">
                <AppIcon className="m-2" />
                <div className="h-[calc(100%-40px)] overflow-y-scroll hide-scrollbar">{children}</div>
            </div>
          <RightBanner />
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
