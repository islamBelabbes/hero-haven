import Image from "next/image";
import React from "react";

const FEATURES = [
  {
    icon: <Lock />,
    description: "Protected Payment Gateway",
  },
  {
    icon: <Heart />,
    description: "Easy to Use Platform",
  },
  {
    icon: <Clock />,
    description: "Fast Bank Transfers",
  },
];

function page() {
  return (
    <main
      className="relative flex min-h-[calc(100vh-5rem)] overflow-hidden px-[84px]"
      style={{
        backgroundImage:
          "linear-gradient(to top,rgba(16,24,40,100%),rgba(12,17,29,100%))",
      }}
    >
      <div className="app  flex grow items-center">
        {/* Left */}
        <div>
          <Image
            src={"/nft/frame.png"}
            width={855}
            height={769}
            alt="frame"
            className="absolute top-0 h-full w-[855px] -translate-x-[81px]"
          />

          <h1 className="relative z-10 mb-[13px] font-kronaOne text-6xl leading-[82px] -tracking-[0.02em] text-white">
            List
            <span
              style={{
                background:
                  "linear-gradient(to top,rgba(161,246,9,100%),rgba(0,222,235,100%))",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              NFT{" "}
            </span>
            Get <br /> Paid in
            <span
              style={{
                background:
                  "linear-gradient(to top,rgba(161,246,9,100%),rgba(0,222,235,100%))",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {" "}
              Seconds{" "}
            </span>
          </h1>

          <p className="relative z-10 mb-[39px] text-left text-xl leading-[31.5px] text-white lg:max-w-[619px]">
            Our platform allows you to receive payment for your NFTs within
            seconds. Trading digital assets has never been more efficient.
          </p>

          <div className="relative z-10 mb-[39px] flex gap-4">
            {" "}
            <button
              className="border-solid px-8 py-4 text-lg font-semibold leading-6 text-white"
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
            <button className="px-5 py-3  font-semibold text-white underline decoration-2">
              See How It Works
            </button>
          </div>

          <div className="relative z-10 flex gap-[10px]">
            {FEATURES.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="overflow-hidden">
          <Image
            src={"/nft/blur.png"}
            width={849}
            height={851}
            alt="blur"
            className="absolute right-0 top-0 h-full w-[820px]"
          />
          <Image
            src={"/nft/croc.png"}
            width={1024}
            height={1024}
            alt="blur"
            className="absolute right-0 top-0 z-0 h-[calc(100vh+2px)] w-[871px] -translate-y-[82px] -scale-x-100 lg:translate-x-[125px]"
          />
        </div>
      </div>
    </main>
  );
}

function FeatureItem({
  icon,
  description,
}: {
  icon: React.ReactNode;
  description: string;
}) {
  return (
    <li className="flex items-center gap-2 lg:max-w-[174.67px]">
      {icon}
      <span className="text-balance font-montserrat text-sm text-white">
        {description}
      </span>
    </li>
  );
}

// SVG

function Lock() {
  return (
    <svg
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 14.5V12.5C21 9.73858 18.7614 7.5 16 7.5C13.2386 7.5 11 9.73858 11 12.5V14.5M16 19V21M12.8 25.5H19.2C20.8802 25.5 21.7202 25.5 22.362 25.173C22.9265 24.8854 23.3854 24.4265 23.673 23.862C24 23.2202 24 22.3802 24 20.7V19.3C24 17.6198 24 16.7798 23.673 16.138C23.3854 15.5735 22.9265 15.1146 22.362 14.827C21.7202 14.5 20.8802 14.5 19.2 14.5H12.8C11.1198 14.5 10.2798 14.5 9.63803 14.827C9.07354 15.1146 8.6146 15.5735 8.32698 16.138C8 16.7798 8 17.6198 8 19.3V20.7C8 22.3802 8 23.2202 8.32698 23.862C8.6146 24.4265 9.07354 24.8854 9.63803 25.173C10.2798 25.5 11.1198 25.5 12.8 25.5Z"
        stroke="#34BC7B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Heart() {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6599 9.63581C14.6605 7.2984 11.3265 6.66964 8.82144 8.81001C6.31639 10.9504 5.96372 14.529 7.93095 17.0604C9.56657 19.1651 14.5165 23.6041 16.1388 25.0408C16.3204 25.2016 16.4111 25.2819 16.517 25.3135C16.6094 25.3411 16.7104 25.3411 16.8028 25.3135C16.9087 25.2819 16.9994 25.2016 17.181 25.0408C18.8033 23.6041 23.7532 19.1651 25.3889 17.0604C27.3561 14.529 27.0465 10.9279 24.4984 8.81001C21.9502 6.69216 18.6593 7.2984 16.6599 9.63581Z"
        stroke="#34BC7B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Clock() {
  return (
    <svg
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0334 16L25.034 18L23.0334 16M25.2786 17.5C25.3149 17.1717 25.3335 16.838 25.3335 16.5C25.3335 11.5294 21.3041 7.5 16.3335 7.5C11.3629 7.5 7.3335 11.5294 7.3335 16.5C7.3335 21.4706 11.3629 25.5 16.3335 25.5C19.1608 25.5 21.6835 24.1963 23.3335 22.1573M16.3335 11.5V16.5L19.3335 18.5"
        stroke="#34BC7B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default page;
