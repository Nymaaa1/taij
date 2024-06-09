import React, { FC } from "react";
import BgGlassmorphism from "@/app/components/header/BgGlassmorphism";
import Image from "next/image";
import AboutHome from "@/app/(widget)/(about)/Home";
import AboutIntroduction from "@/app/(widget)/(about)/Introduction";

export interface SectionOurFeaturesProps {}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({}) => {
  return (
    <div>
      <BgGlassmorphism />
      <AboutHome />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
          <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
            <h1 className="mb-4 text-4xl font-bold">ABOUT US</h1>
            <span className="block text-base xl:text-base text-neutral-6000 dark:text-neutral-400">
              Монгол улсад зочилох үйлчилгээний салбартаа 4 одны зэрэглэл
              хангасан Тайж бизнес зочид буудал нь нийт 4 зэрэглэлийн 39 өрөө,
              Кофе шоп, Ази Европ ресторан, Караоке өрөө, Саун, Фитнесийн заал,
              Хурал семнарийн өрөө, бүхий үйлчилгээний цогцолбор юм.
            </span>
          </div>
          <div className="flex-grow">
            <Image
              className="w-full"
              src={"/restaurant/3.jpg"}
              alt=""
              width={1000}
              height={100}
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
