import React from "react";
import { Inter, Krona_One, Montserrat } from "next/font/google";
import Header from "./_components/header";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

const krona_one = Krona_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-krona-one",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-montserrat",
});

function NftLayout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={`${inter.variable} ${krona_one.variable} ${montserrat.variable} font-inter`}
    >
      <Header />
      {children}
    </div>
  );
}

export default NftLayout;
