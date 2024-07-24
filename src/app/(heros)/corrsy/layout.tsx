import React from "react";
import { Poppins } from "next/font/google";
import Header from "./_components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

function CorrsyLayout({ children }: React.PropsWithChildren) {
  return (
    <div className={`${poppins.className}`}>
      <Header />
      {children}
    </div>
  );
}

export default CorrsyLayout;
