"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import coffeeShopLogo2 from "@/app/components/images/logos/logo.png";
import logoImg2 from "@/app/components/images/coffee/logo.png";
import { useTranslations } from "next-intl";

export interface CoffeeIntrodcutionProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const CoffeeIntrodcution: FC<CoffeeIntrodcutionProps> = ({
  className = "lg:py-14",
  type = "type1",
}) => {
  const message = useTranslations("About");
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image
          src={"/coffee/5.png"}
          alt=""
          width={1000}
          height={100}
          style={{ borderRadius: 10 }}
        />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          TAIJ business hotel
        </span>

        <Image src={logoImg2} alt="My Photo" width="100" height="100" />
        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name={message("overview")} />
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              {message("overview-text")}
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-lg font-semibold">
              {message("1floor")}
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              {message("1floor-text")}
            </span>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default CoffeeIntrodcution;
