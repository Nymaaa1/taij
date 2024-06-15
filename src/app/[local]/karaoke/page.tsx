import React, { FC } from "react";
import "../restaurant/pagee.scss";
import Image from "next/image";
import BgGlassmorphism from "@/app/components/header/BgGlassmorphism";
import kar1 from "@/app/components/images/karaoke/karaoke2.jpg";
import kar2 from "@/app/components/images/karaoke/karaoke3.jpg";
import KaraokeHome from "@/app/(widget)/(karaoke)/Home";
import KaraokeIntroduction from "@/app/(widget)/(karaoke)/Introduction";
import logo from "@/app/components/images/logos/logo.png";
import logoImg from "@/app/components/images/logos/logo.png";

export interface KaraokeAboutProps {}

const KaraokeAbout: FC<KaraokeAboutProps> = ({}) => {
  return (
    <div className="">
      <BgGlassmorphism />
      <KaraokeHome />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div className="flex flex-col lg:flex-row space-y-14 lg:space-y-0 lg:space-x-10 items-center relative text-center lg:text-left">
          <div className="w-screen max-w-full xl:max-w-lg space-y-5 lg:space-y-7">
            <span className="uppercase text-sm text-gray-400 tracking-widest">
              Taij Karaoke
            </span>
            <Image
              src={logoImg}
              width={100}
              height={100}
              alt="Picture of the author"
            />
            <span className="block text-base xl:text-lg text-neutral-6000 dark:text-neutral-400">
              Манай рестораны мэргэжлийн тогооч нар өдөр бүр Ази, Европ төрлийг
              зоогийг уламжлалт жорын дагуу бэлтгэн та бүхэндээ хүргэж байна
            </span>
          </div>
          <div className="flex-grow">
            <Image
              className="w-full"
              src={kar2}
              alt=""
              width={1000}
              height={100}
              style={{ borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <div className="container py-16 lg:py-8 space-y-16 lg:space-y-28">
        <KaraokeIntroduction />
      </div>
      {/* <div className="container py-16 lg:py-8 space-y-16 lg:space-y-28">
        <HotPotRestaurant />
      </div> */}
    </div>
  );
};

export default KaraokeAbout;
