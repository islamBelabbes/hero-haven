import React from "react";
import { Poppins, Bebas_Neue } from "next/font/google";
import Header from "./_components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas-neue",
});

function FoldersLayout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={`${poppins.variable} ${bebas_Neue.variable} mx-[160px] font-poppins`}
    >
      <Header />
      {children}
    </div>
  );
}

export default FoldersLayout;
