"use client";

import { cn } from "@/utility/utility";
import { useState } from "react";

const TABS = [
  { id: 0, name: "Flight", icon: <Flight /> },
  { id: 1, name: "Hotel", icon: <Hotel /> },
  { id: 2, name: "Rent", icon: <Car /> },
];

function Filter() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="mt-7 animate-fade-in lg:min-w-[880px]">
      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Input */}
      <div className="soul-travel-shadow relative z-10 flex w-full items-center justify-between rounded-3xl rounded-tl-none bg-white px-16 py-8">
        <div className="flex items-center gap-12">
          <FilterSelector
            name="Destination"
            icon={<Map />}
            value="Paris, France"
          />
          <span className="h-12 border border-[#ABABAB]"></span>
          <FilterSelector
            name="Date"
            icon={<Calendar />}
            value="17 July 2021"
          />
        </div>

        <button className="rounded-2xl bg-[#F77A40] px-12 py-[18.5px] text-lg text-white">
          Search
        </button>
      </div>
    </div>
  );
}

export default Filter;

const Tabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="flex">
      {TABS.map((tab, index) => (
        <button
          key={tab.id}
          className={cn(
            "flex items-center gap-4 bg-[#ABABAB]/15 p-6 transition-all",
            {
              "bg-white": activeTab === tab.id,
              "rounded-tl-3xl": index === 0,
              "soul-travel-tabs-shadow": index === 0 && activeTab === tab.id,
            },
          )}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.icon}
          <span
            className={cn("text-[#2E2E2E] opacity-50", {
              "text-[#F77A40] opacity-100": activeTab === tab.id,
            })}
          >
            {tab.name}
          </span>
        </button>
      ))}
    </div>
  );
};

const FilterSelector = ({
  icon,
  name,
  value,
}: {
  icon: React.ReactNode;
  name: string;
  value: string;
}) => {
  return (
    <div className="flex w-auto flex-col gap-2">
      <span className="text-lg text-[#ABABAB]">{name}</span>

      <div className="flex items-center gap-6">
        <div className="flex gap-2">
          {icon}
          <span className="gap-2 text-lg font-bold text-[#2E2E2E]">
            {value}
          </span>
        </div>
        <ArrowDown />
      </div>
    </div>
  );
};

// SVG

function Flight() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_274)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.4649 12.5L25.1679 9.94548C25.2914 9.76048 25.4729 9.62147 25.6839 9.55147L28.6839 8.55147C29.0219 8.43847 29.3944 8.51448 29.6619 8.75048C29.9289 8.98598 30.0504 9.34647 29.9804 9.69597L29.0479 14.3595L29.8944 16.053C30.0869 16.438 30.0114 16.9025 29.7069 17.207L27.7069 19.207C27.5194 19.3945 27.2649 19.5 26.9999 19.5H21.9999C21.4479 19.5 20.9999 19.052 20.9999 18.5C20.9999 17.948 21.4479 17.5 21.9999 17.5H26.5859L27.7829 16.3025L27.1054 14.947C27.0059 14.7485 26.9759 14.522 27.0194 14.304L27.6814 10.9935L26.6414 11.34L24.8319 14.0545C24.6464 14.333 24.3344 14.5 23.9999 14.5H5.99992C5.85492 14.5 5.70241 14.587 5.53991 14.685C5.27291 14.8455 5.00791 15.0705 4.77091 15.3175C4.53041 15.568 4.31841 15.842 4.16792 16.105C4.08241 16.255 3.99992 16.386 3.99992 16.5C3.99992 16.7425 4.20091 16.9575 4.39791 17.1395C4.59841 17.3245 4.81642 17.5 4.99992 17.5H9.99992C10.2419 17.5 10.4759 17.588 10.6584 17.7475L18.3754 24.5H20.0569L16.1864 19.081C15.9684 18.7765 15.9394 18.3755 16.1109 18.0425C16.2819 17.7095 16.6254 17.5 16.9999 17.5H17.9999C18.5519 17.5 18.9999 17.948 18.9999 18.5C18.9999 18.768 18.8944 19.0115 18.7224 19.191L22.8134 24.919C23.0314 25.2235 23.0604 25.6245 22.8889 25.9575C22.7179 26.2905 22.3744 26.5 21.9999 26.5H17.9999C17.7579 26.5 17.5239 26.412 17.3414 26.2525L9.62441 19.5H4.99992C4.43742 19.5 3.65691 19.1765 3.04241 18.6105C2.42591 18.0415 1.99992 17.258 1.99992 16.5C1.99992 15.8275 2.52092 14.7735 3.32792 13.9325C4.13542 13.091 5.19092 12.5 5.99992 12.5H23.4649Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 13.5L10 13.5L18 6.5L22 6.5L17 13.5Z"
          fill="#F4B943"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0001 14.5C17.3231 14.5 17.6261 14.344 17.8136 14.081L22.8136 7.081C23.0316 6.7765 23.0606 6.3755 22.8891 6.0425C22.7181 5.7095 22.3746 5.5 22.0001 5.5H18.0001C17.7581 5.5 17.5241 5.588 17.3416 5.7475L9.34156 12.7475C9.02806 13.022 8.91755 13.4615 9.06405 13.8515C9.21055 14.2415 9.58356 14.5 10.0001 14.5L17.0001 14.5ZM18.3756 7.5L12.6616 12.5L16.4856 12.5L20.0571 7.5L18.3756 7.5Z"
          fill="#F77A40"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_274">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Hotel() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_281)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 28.0001H18.4998C19.0519 28.0001 19.4999 28.448 19.4999 29C19.4999 29.552 19.0519 29.9999 18.4998 29.9999H8.99989C8.44776 29.9999 7.99976 29.552 7.99976 29V5.99999C7.99976 5.44799 8.44776 5.00006 8.99989 5.00006H22.9999C23.552 5.00006 24 5.44799 24 5.99999V29C24 29.552 23.552 29.9999 22.9999 29.9999H22.4998C21.9481 29.9999 21.4997 29.552 21.4997 29C21.4997 28.6303 21.7009 28.3071 21.9998 28.134V6.99991H10V28.0001Z"
          fill="#F77A40"
        />
        <path
          d="M24.0003 3H8.00024V6H24.0003V3Z"
          fill="#F4B943"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.0003 3C25.0003 2.4475 24.5527 2 24.0003 2H8.00025C7.4478 2 7.00024 2.4475 7.00024 3V6C7.00024 6.5525 7.4478 7 8.00025 7H24.0003C24.5527 7 25.0003 6.5525 25.0003 6V3ZM9.00025 4V5H23.0003V4H9.00025Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 23C19 22.448 18.5525 21.9998 18 21.9998H14C13.4475 21.9998 13 22.448 13 23V29C13 29.552 13.4475 30.0002 14 30.0002H18C18.5525 30.0002 19 29.552 19 29V23ZM15 24.0002V27.9998H17V24.0002H15Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 17.5C19 17.224 18.776 17 18.5 17H17.5C17.224 17 17 17.224 17 17.5V18.5C17 18.776 17.224 19 17.5 19H18.5C18.776 19 19 18.776 19 18.5V17.5Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 13.5C19 13.224 18.776 13 18.5 13H17.5C17.224 13 17 13.224 17 13.5V14.5C17 14.776 17.224 15 17.5 15H18.5C18.776 15 19 14.776 19 14.5V13.5Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19 9.5C19 9.224 18.776 9 18.5 9H17.5C17.224 9 17 9.224 17 9.5V10.5C17 10.776 17.224 11 17.5 11H18.5C18.776 11 19 10.776 19 10.5V9.5Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 17.5C14.5 17.224 14.276 17 14 17H13C12.724 17 12.5 17.224 12.5 17.5V18.5C12.5 18.776 12.724 19 13 19H14C14.276 19 14.5 18.776 14.5 18.5V17.5Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 13.5C14.5 13.224 14.276 13 14 13H13C12.724 13 12.5 13.224 12.5 13.5V14.5C12.5 14.776 12.724 15 13 15H14C14.276 15 14.5 14.776 14.5 14.5V13.5Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 9.5C14.5 9.224 14.276 9 14 9H13C12.724 9 12.5 9.224 12.5 9.5V10.5C12.5 10.776 12.724 11 13 11H14C14.276 11 14.5 10.776 14.5 10.5V9.5Z"
          fill="#F77A40"
        />
        <path
          d="M9.00025 20.9999H5.00024V28.9999H9.00025V20.9999Z"
          fill="#F4B943"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.0003 20.9999C10.0003 20.4477 9.5527 19.9999 9.00025 19.9999H5.00025C4.4478 19.9999 4.00024 20.4477 4.00024 20.9999V28.9998C4.00024 29.5521 4.4478 29.9998 5.00025 29.9998H9.00025C9.5527 29.9998 10.0003 29.5521 10.0003 28.9998V20.9999ZM6.00025 21.9999V27.9999H8.00025V21.9999H6.00025Z"
          fill="#F77A40"
        />
        <path
          d="M27.0002 20.9999H23.0002V28.9999H27.0002V20.9999Z"
          fill="#F4B943"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28.0003 20.9999C28.0003 20.4477 27.5527 19.9999 27.0003 19.9999H23.0002C22.4478 19.9999 22.0002 20.4477 22.0002 20.9999V28.9998C22.0002 29.5521 22.4478 29.9998 23.0002 29.9998H27.0003C27.5527 29.9998 28.0003 29.5521 28.0003 28.9998V20.9999ZM24.0002 21.9999V27.9999H26.0002V21.9999H24.0002Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23 22H28C28.5521 22 29 21.552 29 21C29 20.448 28.5521 20 28 20H23C22.4479 20 22 20.448 22 21C22 21.552 22.4479 22 23 22Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 22H8.99998C9.55206 22 9.99997 21.552 9.99997 21C9.99997 20.448 9.55206 20 8.99998 20H4C3.44792 20 3 20.448 3 21C3 21.552 3.44792 22 4 22Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3 30H5C5.552 30 6 29.552 6 29C6 28.448 5.552 28 5 28H3C2.448 28 2 28.448 2 29C2 29.552 2.448 30 3 30Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27 30H29C29.552 30 30 29.552 30 29C30 28.448 29.552 28 29 28H27C26.448 28 26 28.448 26 29C26 29.552 26.448 30 27 30Z"
          fill="#F77A40"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_281">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Car() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_303)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.2166 10.2444C24.4846 8.29297 22.6195 7.00031 20.5349 7.00031C17.8509 7.00031 14.1492 7.00031 11.4652 7.00031C9.38058 7.00031 7.51544 8.29297 6.78343 10.2444C5.952 12.4615 5 15.0002 5 15.0002C5 15.0002 8.00001 15.5003 16 15.5003C24 15.5003 27.0001 15.0002 27.0001 15.0002C27.0001 15.0002 26.0481 12.4615 25.2166 10.2444Z"
          fill="#F4B943"
          fillOpacity="0.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M26.1532 9.89324C25.2749 7.55173 23.036 6.00006 20.5349 6.00006C17.8509 6.00006 14.1491 6.00006 11.4651 6.00006C8.96398 6.00006 6.72512 7.55173 5.84683 9.89324C5.0154 12.1103 4.0634 14.649 4.0634 14.649C3.95883 14.929 3.98454 15.2413 4.13369 15.4999C4.2834 15.7589 4.54055 15.9374 4.83541 15.9864C4.83541 15.9864 7.87998 16.5001 16 16.5001C24.12 16.5001 27.1646 15.9864 27.1646 15.9864C27.4595 15.9374 27.7166 15.7589 27.8663 15.4999C28.0155 15.2413 28.0412 14.929 27.9366 14.649L26.1532 9.89324ZM24.2806 10.5956C23.6949 9.03457 22.2023 8.00012 20.5349 8.00012C17.8509 8.00012 14.1491 8.00012 11.4651 8.00012C9.7977 8.00012 8.30513 9.03457 7.71941 10.5956L6.38512 14.1551C7.90284 14.299 10.9337 14.5 16 14.5C21.0663 14.5 24.0972 14.299 25.6149 14.1551L24.2806 10.5956Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.5 17C6.12 17 5 18.12 5 19.5C5 20.88 6.12 22 7.5 22C8.88 22 10 20.88 10 19.5C10 18.12 8.88 17 7.5 17ZM7.5 19C7.776 19 8 19.224 8 19.5C8 19.776 7.776 20 7.5 20C7.224 20 7 19.776 7 19.5C7 19.224 7.224 19 7.5 19Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.5 17C23.12 17 22 18.12 22 19.5C22 20.88 23.12 22 24.5 22C25.88 22 27 20.88 27 19.5C27 18.12 25.88 17 24.5 17ZM24.5 19C24.776 19 25 19.224 25 19.5C25 19.776 24.776 20 24.5 20C24.224 20 24 19.776 24 19.5C24 19.224 24.224 19 24.5 19Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13 21H19C19.552 21 20 20.552 20 20C20 19.448 19.552 19 19 19H13C12.448 19 12 19.448 12 20C12 20.552 12.448 21 13 21Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.5005 22.057L2.005 17.0995C2.0015 17.0665 2 17.033 2 17C2 15.3445 3.3445 14 5 14C5.055 14 5.11 14.0045 5.1645 14.0135C5.1645 14.0135 8.12 14.5 16 14.5C23.88 14.5 26.8355 14.0135 26.8355 14.0135C26.89 14.0045 26.945 14 27 14C28.6555 14 30 15.3445 30 17C30 17.033 29.9985 17.0665 29.995 17.0995L29.4995 22.057C29.4695 23.6545 28.1885 24.9485 26.596 24.9985C26.244 25.0585 24.9235 25.254 22.0445 25.382C21.493 25.4065 21.0255 24.979 21.001 24.4275C20.9765 23.876 21.404 23.4085 21.9555 23.384C25.166 23.2415 26.304 23.0195 26.304 23.0195C26.3685 23.0065 26.434 23 26.5 23C27.052 23 27.5 22.552 27.5 22C27.5 21.967 27.5015 21.9335 27.505 21.9005L27.999 16.96C27.979 16.447 27.571 16.0325 27.0605 16.002C26.467 16.089 23.265 16.5 16 16.5C8.735 16.5 5.533 16.089 4.9395 16.002C4.429 16.0325 4.021 16.447 4.001 16.96L4.495 21.9005C4.4985 21.9335 4.5 21.967 4.5 22C4.5 22.552 4.948 23 5.5 23C5.566 23 5.6315 23.0065 5.696 23.0195C5.696 23.0195 8.15 23.5 16 23.5C16.705 23.5 17.3675 23.496 17.9885 23.489C18.5405 23.4825 18.9935 23.9255 19 24.4775C19.0065 25.0295 18.5635 25.4825 18.0115 25.489C17.383 25.496 16.7135 25.5 16 25.5C8.7565 25.5 5.9395 25.0895 5.4025 24.9985C3.811 24.9475 2.5305 23.654 2.5005 22.057Z"
          fill="#F77A40"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.503 23H4C3.4475 23 3 23.4475 3 24V27C3 27.5525 3.4475 28 4 28H8C8.5525 28 9 27.5525 9 27V24.2685C9 23.7445 8.595 23.309 8.072 23.271C6.351 23.147 5.696 23.0195 5.696 23.0195C5.6325 23.0065 5.568 23 5.503 23ZM5.4125 25H5V26H7V25.1905C6.1115 25.109 5.615 25.0345 5.4125 25ZM26.5 23L26.304 23.0195C26.304 23.0195 25.649 23.147 23.928 23.271C23.405 23.309 23 23.7445 23 24.2685V27C23 27.5525 23.4475 28 24 28H28C28.5525 28 29 27.5525 29 27V24C29 23.4475 28.5525 23 28 23H26.5ZM25 25.1905V26H27V25H26.5875C26.385 25.0345 25.8885 25.109 25 25.1905Z"
          fill="#F77A40"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_303">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function Map() {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4599 10.13C20.3195 8.66892 19.8031 7.26909 18.9611 6.06682C18.119 4.86456 16.98 3.90083 15.6549 3.2695C14.3298 2.63816 12.8638 2.36072 11.3996 2.46421C9.93543 2.56769 8.52301 3.04856 7.29988 3.86C6.24908 4.56265 5.36693 5.4893 4.71682 6.57339C4.06672 7.65749 3.66478 8.87211 3.53988 10.13C3.41736 11.3797 3.57455 12.6409 4.00005 13.8223C4.42555 15.0036 5.10868 16.0755 5.99988 16.96L11.2999 22.27C11.3928 22.3637 11.5034 22.4381 11.6253 22.4889C11.7472 22.5397 11.8779 22.5658 12.0099 22.5658C12.1419 22.5658 12.2726 22.5397 12.3945 22.4889C12.5163 22.4381 12.6269 22.3637 12.7199 22.27L17.9999 16.96C18.8911 16.0755 19.5742 15.0036 19.9997 13.8223C20.4252 12.6409 20.5824 11.3797 20.4599 10.13ZM16.5999 15.55L11.9999 20.15L7.39988 15.55C6.72197 14.8721 6.20268 14.0523 5.87935 13.1498C5.55601 12.2472 5.43667 11.2842 5.52988 10.33C5.6237 9.36111 5.93164 8.42516 6.43145 7.58985C6.93126 6.75453 7.61044 6.04071 8.41988 5.5C9.48083 4.79524 10.7262 4.4193 11.9999 4.4193C13.2736 4.4193 14.5189 4.79524 15.5799 5.5C16.3869 6.03862 17.0646 6.74928 17.5642 7.58094C18.0639 8.4126 18.3732 9.34461 18.4699 10.31C18.5661 11.2674 18.4483 12.2343 18.1249 13.1406C17.8014 14.0468 17.2805 14.8698 16.5999 15.55ZM11.9999 6.5C11.1099 6.5 10.2398 6.76392 9.49982 7.25839C8.75979 7.75286 8.18302 8.45566 7.84242 9.27793C7.50183 10.1002 7.41271 11.005 7.58635 11.8779C7.75998 12.7508 8.18856 13.5526 8.8179 14.182C9.44724 14.8113 10.2491 15.2399 11.122 15.4135C11.9949 15.5872 12.8997 15.4981 13.722 15.1575C14.5442 14.8169 15.247 14.2401 15.7415 13.5001C16.236 12.76 16.4999 11.89 16.4999 11C16.4972 9.80734 16.0223 8.66428 15.1789 7.82094C14.3356 6.9776 13.1925 6.50265 11.9999 6.5ZM11.9999 13.5C11.5054 13.5 11.0221 13.3534 10.611 13.0787C10.1998 12.804 9.8794 12.4135 9.69018 11.9567C9.50096 11.4999 9.45145 10.9972 9.54792 10.5123C9.64438 10.0273 9.88248 9.58187 10.2321 9.23224C10.5817 8.88261 11.0272 8.6445 11.5122 8.54804C11.9971 8.45158 12.4998 8.50109 12.9566 8.6903C13.4134 8.87952 13.8039 9.19996 14.0786 9.61108C14.3533 10.0222 14.4999 10.5056 14.4999 11C14.4999 11.663 14.2365 12.2989 13.7676 12.7678C13.2988 13.2366 12.6629 13.5 11.9999 13.5Z"
        fill="#F77A40"
      />
    </svg>
  );
}

function Calendar() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 19C12.1978 19 12.3911 18.9414 12.5556 18.8315C12.72 18.7216 12.8482 18.5654 12.9239 18.3827C12.9996 18.2 13.0194 17.9989 12.9808 17.8049C12.9422 17.6109 12.847 17.4327 12.7071 17.2929C12.5673 17.153 12.3891 17.0578 12.1951 17.0192C12.0011 16.9806 11.8 17.0004 11.6173 17.0761C11.4346 17.1518 11.2784 17.28 11.1685 17.4444C11.0586 17.6089 11 17.8022 11 18C11 18.2652 11.1054 18.5196 11.2929 18.7071C11.4804 18.8946 11.7348 19 12 19ZM17 19C17.1978 19 17.3911 18.9414 17.5556 18.8315C17.72 18.7216 17.8482 18.5654 17.9239 18.3827C17.9996 18.2 18.0194 17.9989 17.9808 17.8049C17.9422 17.6109 17.847 17.4327 17.7071 17.2929C17.5673 17.153 17.3891 17.0578 17.1951 17.0192C17.0011 16.9806 16.8 17.0004 16.6173 17.0761C16.4346 17.1518 16.2784 17.28 16.1685 17.4444C16.0586 17.6089 16 17.8022 16 18C16 18.2652 16.1054 18.5196 16.2929 18.7071C16.4804 18.8946 16.7348 19 17 19ZM17 15C17.1978 15 17.3911 14.9414 17.5556 14.8315C17.72 14.7216 17.8482 14.5654 17.9239 14.3827C17.9996 14.2 18.0194 13.9989 17.9808 13.8049C17.9422 13.6109 17.847 13.4327 17.7071 13.2929C17.5673 13.153 17.3891 13.0578 17.1951 13.0192C17.0011 12.9806 16.8 13.0004 16.6173 13.0761C16.4346 13.1518 16.2784 13.28 16.1685 13.4444C16.0586 13.6089 16 13.8022 16 14C16 14.2652 16.1054 14.5196 16.2929 14.7071C16.4804 14.8946 16.7348 15 17 15ZM12 15C12.1978 15 12.3911 14.9414 12.5556 14.8315C12.72 14.7216 12.8482 14.5654 12.9239 14.3827C12.9996 14.2 13.0194 13.9989 12.9808 13.8049C12.9422 13.6109 12.847 13.4327 12.7071 13.2929C12.5673 13.153 12.3891 13.0578 12.1951 13.0192C12.0011 12.9806 11.8 13.0004 11.6173 13.0761C11.4346 13.1518 11.2784 13.28 11.1685 13.4444C11.0586 13.6089 11 13.8022 11 14C11 14.2652 11.1054 14.5196 11.2929 14.7071C11.4804 14.8946 11.7348 15 12 15ZM19 3H18V2C18 1.73478 17.8946 1.48043 17.7071 1.29289C17.5196 1.10536 17.2652 1 17 1C16.7348 1 16.4804 1.10536 16.2929 1.29289C16.1054 1.48043 16 1.73478 16 2V3H8V2C8 1.73478 7.89464 1.48043 7.70711 1.29289C7.51957 1.10536 7.26522 1 7 1C6.73478 1 6.48043 1.10536 6.29289 1.29289C6.10536 1.48043 6 1.73478 6 2V3H5C4.20435 3 3.44129 3.31607 2.87868 3.87868C2.31607 4.44129 2 5.20435 2 6V20C2 20.7956 2.31607 21.5587 2.87868 22.1213C3.44129 22.6839 4.20435 23 5 23H19C19.7956 23 20.5587 22.6839 21.1213 22.1213C21.6839 21.5587 22 20.7956 22 20V6C22 5.20435 21.6839 4.44129 21.1213 3.87868C20.5587 3.31607 19.7956 3 19 3ZM20 20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H5C4.73478 21 4.48043 20.8946 4.29289 20.7071C4.10536 20.5196 4 20.2652 4 20V11H20V20ZM20 9H4V6C4 5.73478 4.10536 5.48043 4.29289 5.29289C4.48043 5.10536 4.73478 5 5 5H6V6C6 6.26522 6.10536 6.51957 6.29289 6.70711C6.48043 6.89464 6.73478 7 7 7C7.26522 7 7.51957 6.89464 7.70711 6.70711C7.89464 6.51957 8 6.26522 8 6V5H16V6C16 6.26522 16.1054 6.51957 16.2929 6.70711C16.4804 6.89464 16.7348 7 17 7C17.2652 7 17.5196 6.89464 17.7071 6.70711C17.8946 6.51957 18 6.26522 18 6V5H19C19.2652 5 19.5196 5.10536 19.7071 5.29289C19.8946 5.48043 20 5.73478 20 6V9ZM7 15C7.19778 15 7.39112 14.9414 7.55557 14.8315C7.72002 14.7216 7.84819 14.5654 7.92388 14.3827C7.99957 14.2 8.01937 13.9989 7.98079 13.8049C7.9422 13.6109 7.84696 13.4327 7.70711 13.2929C7.56725 13.153 7.38907 13.0578 7.19509 13.0192C7.00111 12.9806 6.80004 13.0004 6.61732 13.0761C6.43459 13.1518 6.27841 13.28 6.16853 13.4444C6.05865 13.6089 6 13.8022 6 14C6 14.2652 6.10536 14.5196 6.29289 14.7071C6.48043 14.8946 6.73478 15 7 15ZM7 19C7.19778 19 7.39112 18.9414 7.55557 18.8315C7.72002 18.7216 7.84819 18.5654 7.92388 18.3827C7.99957 18.2 8.01937 17.9989 7.98079 17.8049C7.9422 17.6109 7.84696 17.4327 7.70711 17.2929C7.56725 17.153 7.38907 17.0578 7.19509 17.0192C7.00111 16.9806 6.80004 17.0004 6.61732 17.0761C6.43459 17.1518 6.27841 17.28 6.16853 17.4444C6.05865 17.6089 6 17.8022 6 18C6 18.2652 6.10536 18.5196 6.29289 18.7071C6.48043 18.8946 6.73478 19 7 19Z"
        fill="#F77A40"
      />
    </svg>
  );
}

function ArrowDown() {
  return (
    <svg
      width="14"
      height="8"
      viewBox="0 0 14 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 8.00002C6.82453 8.00104 6.65058 7.9674 6.48813 7.90105C6.32568 7.8347 6.17792 7.73693 6.05334 7.61336L0.720003 2.28002C0.468932 2.02895 0.327881 1.68843 0.327881 1.33336C0.327881 0.978287 0.468932 0.637761 0.720003 0.386689C0.971075 0.135618 1.3116 -0.00543213 1.66667 -0.00543213C2.02174 -0.00543213 2.36226 0.135618 2.61334 0.386689L7 4.78669L11.3867 0.400023C11.6417 0.181588 11.9698 0.0674459 12.3054 0.0804075C12.641 0.093369 12.9593 0.23248 13.1968 0.469939C13.4342 0.707398 13.5733 1.02572 13.5863 1.36128C13.5992 1.69685 13.4851 2.02495 13.2667 2.28002L7.93334 7.61336C7.68499 7.85968 7.34979 7.99855 7 8.00002Z"
        fill="#2E2E2E"
      />
    </svg>
  );
}
