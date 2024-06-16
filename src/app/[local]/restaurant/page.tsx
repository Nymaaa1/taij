import React, { FC } from "react";
import "./pagee.scss";
import Image from "next/image";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { MapIcon } from "@heroicons/react/24/solid";
import BgGlassmorphism from "@/app/components/header/BgGlassmorphism";
import RestaurantIntroduction from "@/app/(widget)/(restaurant)/Introduction";
import RestaurantHome from "@/app/(widget)/(restaurant)/Home";
import HotPotRestaurant from "@/app/(widget)/(restaurant)/Hotpot";
import edelwiessLogo from "@/app/components/images/logos/edelweiss.png";
import { useTranslations } from "next-intl";
import HotPotRestaurant2 from "@/app/(widget)/(restaurant)/Hotpot2";
import HotPotRestaurant3 from "@/app/(widget)/(restaurant)/Hotpot3";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  const message = useTranslations("Restaurant");
  return (
    <div className="">
      <BgGlassmorphism />
      <RestaurantHome />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
          <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
            <Image
              className="rounded-lg"
              src={edelwiessLogo}
              alt="My Photo"
              width={100}
              height={100}
            />
            <span className="block text-base xl:text-lg text-neutral-600 dark:text-neutral-400">
              {message("edelweiss-text")}
            </span>
            <span className="flex items-center mt-1">
              <PhoneIcon className="h-5 w-5 mr-2 text-neutral-600 dark:text-neutral-400" />
              {message("phone")}:+976 77774777
            </span>
            <span className="flex items-center mt-1">
              <MapIcon className="h-5 w-5 mr-2 text-neutral-600 dark:text-neutral-400" />
              {message("location")}: 2nd Floor
            </span>
          </div>
          <div className="flex-grow">
            <Image
              className="w-full"
              src={"/restaurant/3.jpg"}
              alt=""
              width={1000}
              height={100}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="container py-16 lg:py-8 space-y-16 lg:space-y-28">
        <RestaurantIntroduction />
      </div>
      <div className="container py-6 lg:py-8 space-y-6 lg:space-y-8">
        <HotPotRestaurant />
      </div>
      <div className="container py-6 lg:py-8 space-y-6 lg:space-y-8">
        <HotPotRestaurant3 />
      </div>
      <div className="container py-6 lg:py-8 space-y-6 lg:space-y-8">
        <HotPotRestaurant2 />
      </div>
    </div>
  );
};

export default PageAbout;
