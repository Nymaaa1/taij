"use client";
import React, { FC } from "react";
// import rightImgs from "/restaurant/1.jpg";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import coffeeShopLogo2 from "@/app/components/images/logos/edelweiss.png";
import { useTranslations } from "next-intl";

export interface RestaurantIntroductionProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const RestaurantIntroduction: FC<RestaurantIntroductionProps> = ({
  className = "lg:py-14",
  // rightImg = rightImgs,
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
      <div className="flex-grow">
        <Image
          src={"/coffee/5.png"}
          alt=""
          width={1000}
          height={100}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Edelweiss Restaurant
        </span>

        <Image src={coffeeShopLogo2} alt="My Photo" width="160" height="160" />
        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name={message("time")} />
            <span className="block text-xl font-semibold">11:00 - 23:00</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              {message("time-text")}
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name={message("order")} />
            <span className="block text-xl font-semibold">
              {message("order-header")}
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              {message("order-text")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantIntroduction;
