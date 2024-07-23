"use client";
import React, { FC } from "react";
import rightImgs from "@/app/components/images/restaurant/hotpot3.jpg";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import { useTranslations } from "next-intl";

export interface HotPotRestaurant3Props {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const HotPotRestaurant3: FC<HotPotRestaurant3Props> = ({
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
      <div className="flex-grow">
        <Image src={rightImg} alt="" style={{ borderRadius: "10px" }} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-1/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge color="green" name={message("job")} />
            <span className="block text-xl font-semibold">
              {message("job")}
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              {message("service-text")}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HotPotRestaurant3;
