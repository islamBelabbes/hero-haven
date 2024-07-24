import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  {
    name: "pricing",
    href: "#",
  },
  {
    name: "features",
    href: "#",
  },
];

function Header() {
  return (
    <header className="border-b border-b-[#282828] bg-[#141414]">
      <div className="app flex items-center justify-between px-[102px] py-4">
        {/* Logo */}
        <div className="relative h-[35px] w-[128px]">
          <Image fill src={"folders/folders-logo.svg"} alt="folders logo" />
        </div>

        {/* Nav */}
        <nav className="text-sm uppercase leading-[35px] tracking-[1.76px] text-[#E6E6E6] ">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="hover:opacity-70">
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}

            {/* button */}
            <li>
              <button className="rounded-[500px] border-transparent bg-[#292929] px-7 py-1 text-sm uppercase leading-[35px] tracking-[1.76px] hover:opacity-70">
                start for free
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
