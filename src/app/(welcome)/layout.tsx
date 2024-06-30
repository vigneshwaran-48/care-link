import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import "../globals.css";
import { Poppins } from "next/font/google";
import AppIcon from "../components/AppIcon";

export const metadata: Metadata = {
  title: "Welcome to CareLink",
  description: "CareLink welcome page",
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
      <body className="w-full h-full mode-light bg-primary">
        <header className="w-full h-[50px] flex justify-between p-2">
          <Link href="/">
            <AppIcon isLight />
          </Link>
          <button className="py-1 h-fit bg-other-bg text-other-text rounded px-4 font-bold">
            Get Started
          </button>
        </header>
        <main className="w-full h-[calc(100%-50px)] overflow-y-scroll hide-scrollbar p-2">
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
