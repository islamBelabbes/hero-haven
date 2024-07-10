import React from "react";
import { Manrope, DM_Sans } from "next/font/google";
import Header from "./_components/header";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

function FoldersLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={`${manrope.variable} ${dm_sans.variable} font-manrope`}>
      <Header />
      {children}
    </div>
  );
}

export default FoldersLayout;
