import React, { FC } from "react";
import BgGlassmorphism from "@/app/components/header/BgGlassmorphism";
import Image from "next/image";
import AboutHome from "@/app/(widget)/(about)/Home";
import AboutIntroduction from "@/app/(widget)/(about)/Introduction";
import { useTranslations } from "next-intl";

export interface SectionOurFeaturesProps {}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({}) => {
  const message = useTranslations("About");
  return (
    <div>
      <BgGlassmorphism />
      <AboutHome />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
          <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
            <h1 className="mb-4 text-4xl font-bold">{message("header")}</h1>
            <span className="block text-base xl:text-base text-neutral-6000 dark:text-neutral-400">
              {message("about-text")}
            </span>
          </div>
          <div className="flex-grow">
            <Image
              className="w-full"
              src={"/about/about6-min.jpg"}
              alt=""
              width={1000}
              height={1000}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="container py-16 lg:py-8 space-y-16 lg:space-y-28">
        <AboutIntroduction />
      </div>
    </div>
  );
};

export default SectionOurFeatures;
