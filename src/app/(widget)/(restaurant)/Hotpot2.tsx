"use client";
import React, { FC } from "react";
import rightImgs from "@/app/components/images/restaurant/download.jpg";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import coffeeShopLogo2 from "@/app/components/images/logos/restaurant-logo.png";
import { useTranslations } from "next-intl";

export interface HotPotRestaurant2Props {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const HotPotRestaurant2: FC<HotPotRestaurant2Props> = ({
  className = "lg:py-14",
  rightImg = rightImgs,
  type = "type1",
}) => {
  const message = useTranslations("Restaurant");
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/5 ${
          type === "type1" ? "lg:pl-1" : "lg:pr-1"
        }`}
      >
       
        {/* <Image src={coffeeShopLogo2} alt="My Photo" width="160" height="160" /> */}

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge color="green" name={message("advantage")} />
            <span className="block text-xl font-semibold">
              {message("service")}
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              {message("advantage-text")}
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-grow">
        <Image src={rightImg} alt="" style={{ borderRadius: "10px" }} />
      </div>
    </div>
  );
};

export default HotPotRestaurant2;
