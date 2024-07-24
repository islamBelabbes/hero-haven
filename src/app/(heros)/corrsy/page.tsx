import Image from "next/image";

function page() {
  return (
    <main className="app mt-[110px] flex animate-fade-in items-center gap-[42px] px-[120px]">
      <div>
        <div className="mb-4 flex items-center gap-4">
          <CheckIcon />
          <span className="text-base/7 font-medium tracking-[0.03125rem] text-[#030303]">
            Most trusted education platform
          </span>
        </div>

        <h1 className="mb-8 w-[596px] text-[55px]/[65px] font-semibold -tracking-[2px] text-[#121212]">
          Grow your skills and advance career
        </h1>

        <p className="mb-8 text-base/[26px] font-normal tracking-[0.03125rem] text-[#2F2F2F]/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />{" "}
          eiusmod tempor incididunt ut labore.
        </p>

        <div className="flex items-center gap-10">
          <button className="flex rounded-[30px] bg-[#754FFE]/80  px-[50px] py-[27px] text-base/4 capitalize tracking-[0.01875rem] text-white">
            Join Free Now
          </button>

          <div className="flex items-center gap-6">
            <PlayerICon />
            <span className="text-base/7 capitalize tracking-[0.03125rem] text-[#2F2F2F]/70">
              watch demo
            </span>
          </div>
        </div>
      </div>

      <Image
        src={"/corrsy/banner.png"}
        width={585}
        height={501}
        style={{
          width: "585px",
          height: "501px",
        }}
        alt="banner"
      />
    </main>
  );
}

const CheckIcon = () => {
  return (
    <svg
      className="size-[18px]"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_138_331)">
        <path
          d="M16.5 8.3099V8.9999C16.4991 10.6172 15.9754 12.1909 15.007 13.4863C14.0386 14.7816 12.6775 15.7293 11.1265 16.1878C9.57557 16.6464 7.91794 16.5913 6.40085 16.0308C4.88376 15.4704 3.58849 14.4345 2.70822 13.0777C1.82795 11.7209 1.40984 10.1159 1.51626 8.50213C1.62267 6.88832 2.24791 5.35214 3.29871 4.1227C4.34951 2.89326 5.76959 2.03644 7.34714 1.68001C8.92469 1.32358 10.5752 1.48665 12.0525 2.1449"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.5 3L9 10.5075L6.75 8.2575"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_138_331">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const PlayerICon = () => {
  return (
    <svg
      className="size-[41px]"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20.5" cy="20.5" r="19.5" stroke="#29BAF9" />
      <circle cx="20.5" cy="20.5" r="17.5" fill="#29BAF9" />
      <path
        d="M15 13L26.6667 20.5L15 28V13Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default page;
