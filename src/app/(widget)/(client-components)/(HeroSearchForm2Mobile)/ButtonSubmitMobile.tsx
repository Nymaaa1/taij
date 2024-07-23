import React, { FC } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
  className?: string;
  onClick?: () => void;
}
const ButtonSubmitMobile: FC<Props> = ({
  className = "",
  onClick = () => { },
}) => {
  const message = useTranslations("Mobile");
  return (
    <Link
      href="https://www.booking.com/hotel/mn/taij-business-ulaanbaatar.html"
      type="button"
      className="flex-shrink-0 px-4 py-2.5 cursor-pointer rounded-xl bg-[#CAA866] hover:bg-[#b5975b] flex items-center justify-center text-neutral-50 focus:outline-none ${className} relative z-20"
      // onClick={(e) => {
        // e.preventDefault();
        // onClick();
      // }}
    >
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <span className="ml-2">{message("search")}</span>
    </Link>
  );
};

export default ButtonSubmitMobile;
