import { cn } from "@/utility/utility";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NAV_LINKS = [
  {
    name: "Destination",
    href: "/soultravel1",
  },
  {
    name: "Package",
    href: "/soultrave2l",
  },
  {
    name: "Blog",
    href: "/soult3ravel",
  },
  {
    name: "About Us",
    href: "/soul4travel",
  },
  {
    name: "Contact",
    href: "/sou5ltravel",
  },
];

const NAV_LINK_CLASSES =
  "after:absolute after:bottom-0 after:left-1/2 after:block after:h-[6px] after:w-[43px] after:translate-x-[-50%] after:translate-y-[8px] after:transform after:rounded-[8px] after:bg-[#F77A40] after:content-[''] after:opacity-0 after:transition-opacity after:duration-300";

function Header() {
  return (
    <header className="mb-[80px] flex animate-fade-in items-center justify-between pt-8  ">
      {/* Logo */}
      <div>
        <Image
          width={155}
          height={31}
          src={"/soultravel/soul-travel-logo.svg"}
          alt="logo"
        />
      </div>

      {/* nav */}
      <nav>
        <ul className="flex items-center gap-12">
          {NAV_LINKS.map((link, index) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "relative text-lg capitalize text-[#2E2E2E] hover:text-[#F77A40] ",
                  NAV_LINK_CLASSES,
                  { "after:opacity-100": index === 0 },
                )}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* buttons */}
      <div className="flex gap-8 ">
        <button className="text-lg text-[#2E2E2E] hover:text-[#F77A40]">
          Sign Up
        </button>
        <button className="rounded-lg bg-[#F77A40] px-10 py-[10px] text-lg text-white">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
