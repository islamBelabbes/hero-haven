import Link from "next/link";

const NAV_LINKS = [
  {
    name: "home",
    href: "#",
  },
  {
    name: "about",
    href: "#",
  },
  {
    name: "courses",
    href: "#",
  },
  {
    name: "flashsale",
    href: "#",
  },
  {
    name: "blog",
    href: "#",
  },
  {
    name: "career",
    href: "#",
  },
];

function Header() {
  return (
    <header className="corrsy-shadow animate-fade-in">
      <div className="app flex h-[100px] items-center justify-between px-[120px]">
        {/* Left */}
        <div className="flex items-center gap-[61px]">
          <Avatar />
          <nav>
            <ul className="flex items-center gap-10">
              {NAV_LINKS.map((navLink, index) => (
                <li key={index}>
                  <Link
                    href={navLink.href}
                    className="text-sm/[14px] font-medium capitalize tracking-[0.01875px]"
                  >
                    {navLink.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <button className="flex size-10 items-center justify-center rounded-full bg-[#18113C]">
            <Search />
          </button>
          <button className="rounded-[30px] bg-[#18113C]  px-[30px] py-3 text-base/4 font-medium capitalize tracking-[0.01875px] text-white">
            login
          </button>
        </div>
      </div>
    </header>
  );
}

const Avatar = () => {
  return (
    <svg
      className="size-10"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#754FFE" />
      <circle cx="20" cy="20" r="19.5" stroke="#754FFE" stroke-opacity="0.8" />
      <path
        d="M13.63 19.7C13.63 18.464 13.906 17.36 14.458 16.388C15.022 15.404 15.784 14.642 16.744 14.102C17.716 13.55 18.802 13.274 20.002 13.274C21.406 13.274 22.636 13.634 23.692 14.354C24.748 15.074 25.486 16.07 25.906 17.342H23.008C22.72 16.742 22.312 16.292 21.784 15.992C21.268 15.692 20.668 15.542 19.984 15.542C19.252 15.542 18.598 15.716 18.022 16.064C17.458 16.4 17.014 16.88 16.69 17.504C16.378 18.128 16.222 18.86 16.222 19.7C16.222 20.528 16.378 21.26 16.69 21.896C17.014 22.52 17.458 23.006 18.022 23.354C18.598 23.69 19.252 23.858 19.984 23.858C20.668 23.858 21.268 23.708 21.784 23.408C22.312 23.096 22.72 22.64 23.008 22.04H25.906C25.486 23.324 24.748 24.326 23.692 25.046C22.648 25.754 21.418 26.108 20.002 26.108C18.802 26.108 17.716 25.838 16.744 25.298C15.784 24.746 15.022 23.984 14.458 23.012C13.906 22.04 13.63 20.936 13.63 19.7Z"
        fill="white"
      />
    </svg>
  );
};

const Search = () => {
  return (
    <svg
      className="size-6"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 20.9999L16.6499 16.6499"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Header;
