import { PathName } from "@/app/components/routers/type";
import Link from "next/link";
import React, { FC } from "react";
import { useTranslations } from "next-intl";

export interface Props {
  href?: PathName;
}

const ButtonSubmit: FC<Props> = ({ href }) => {
  const message = useTranslations("Mobile");
  return (
    <Link
      href={"https://www.booking.com/hotel/mn/taij-business-ulaanbaatar.html"}
      type="button"
      className="h-14 md:h-16 w-full md:w-16 rounded-full bg-[#CAA866] hover:bg-[#b5975b] flex items-center justify-center text-neutral-50 focus:outline-none"
      // style={{ backgroundColor: "#CAA866" }}
    >
      <span className="mr-3 md:hidden">{message("search")}</span>
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
    </Link>
  );
};

export default ButtonSubmit;
