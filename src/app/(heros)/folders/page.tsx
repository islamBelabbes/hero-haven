import React from "react";

import Image from "next/image";

const FEATURES = [
  "Up to 300GB storage on free plan",
  "Unlimited folders",
  "Set up in just 1 day",
];

function page() {
  return (
    <main className="folders-bg min-h-screen">
      {/* DETAILS */}
      <div className="flex flex-col items-center pt-[33px]">
        {/* TOP TAG */}
        <div className="flex animate-fade-in items-center gap-2 rounded-[50000px] border border-[#282828] bg-[#171717] px-4 py-[6px]">
          <span className="text-[13px] capitalize leading-[15px] text-[#AAAAAA]">
            news
          </span>
          <span className=" text-sm font-medium capitalize leading-6 text-[#F2F2F2]">
            series a funding
          </span>
        </div>

        {/* MAIN TEXT */}
        <h1 className="mt-4 animate-fade-in text-center text-[56px] leading-[72px] tracking-[-0.32px] text-[#EEEEEE]">
          Access your{" "}
          <span className="text-[#24FB94] underline">folders at any time</span>{" "}
          with <br /> minimal hassle. Made for you.
        </h1>

        {/* SUB TEXT */}
        <p className="mt-[18px] max-w-[839px] animate-fade-in text-center text-xl leading-[30px] text-[#AAAAAA]">
          Providing instant access to your folders anytime, anywhere. With a
          user-friendly interface <br /> and seamless functionality, managing
          your digital files has never been easier.
        </p>

        {/* CLICK TO ACTION */}
        <button className="mt-8 animate-fade-in rounded-[500px] bg-[#24FB94] px-8 py-4 font-dmSans text-lg font-medium leading-5 text-[#090909] hover:opacity-70">
          Create Folder For Free
        </button>

        {/* FEATURES */}
        <ul className="mb-[67px] mt-5 flex items-center gap-8">
          {FEATURES.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckIcon />
              <span className="leading-7 text-[#F2F2F2]">{feature}</span>
            </li>
          ))}
        </ul>

        <Image
          src="/folders/folders-demo.png"
          alt="folders demo"
          width={1313}
          height={828}
          className="animate-fade-in"
        />
      </div>
    </main>
  );
}

const CheckIcon = () => {
  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5379 9L8.37126 18.1667L4.20459 14"
        stroke="#24FB94"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default page;
