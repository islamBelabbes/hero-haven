import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  {
    name: "How it Works",
    href: "#",
  },
  {
    name: "Buyers",
    href: "#",
  },
  {
    name: "Sellers",
    href: "#",
  },
  {
    name: "Pricing",
    href: "#",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Blog",
    href: "#",
  },
];

function Header() {
  return (
    <header className="relative z-20 min-h-20 border border-[#333741] bg-[#101828] px-20 py-5">
      <div className="app flex w-full items-center">
        <div className="flex items-center gap-10 px-5">
          <Image
            src={"/nft/nft-logo.png"}
            alt="logo"
            width={78}
            height={30}
            className="h-[30px] min-w-[78px] object-cover"
          />

          <nav>
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map((navLink, index) => (
                <li key={index} className="py-1">
                  <Link
                    href={navLink.href}
                    className="font-semibold text-white "
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <button className="font-semibold text-[#7DE226] underline decoration-2">
            Log In
          </button>
          <button
            className="border-solid px-6 py-2 font-semibold text-white"
            style={{
              background:
                "linear-gradient(to left bottom, rgba(89, 157, 33), rgba(23, 155, 126))",
              borderImage:
                "linear-gradient(to left bottom, rgba(120, 255, 0), rgba(255, 255, 255))",
              borderRadius: "8px", // Adjust the border radius value as per your design
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
