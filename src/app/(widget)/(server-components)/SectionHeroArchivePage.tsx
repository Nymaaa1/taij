import React, { FC, ReactNode } from "react";
import imagePng from "@/app/components/images/hero-right2.png";
import HeroSearchForm, {
  SearchTab,
} from "../(client-components)/(HeroSearchForm)/HeroSearchForm";
import Image, { StaticImageData } from "next/image";

export interface SectionHeroArchivePageProps {
  className?: string;
  listingType?: ReactNode;
  currentPage: "Stays" | "Experiences" | "Cars" | "Flights";
  currentTab: SearchTab;
  rightImage?: StaticImageData;
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
  listingType,
  currentPage,
  currentTab,
  rightImage = imagePng,
}) => {
  // const videoStyle = {
  //   inset: 0,
  //   objectFit: "cover",
  //   height: "100vh",
  // };

  // if (window.innerWidth <= 768) {
  //   // videoStyle["objectPosition"] = "center";
  // }

  return (
    <div
      className={`nc-SectionHeroArchivePage flex flex-col relative ${className}`}
      data-nc-id="SectionHeroArchivePage"
    >
      <video
        autoPlay
        loop
        muted
        className="object-cover w-full h-full"
        style={{ inset: 0, objectFit: "cover", height: "100vh" }}
      >
        <source src="homepage/robovice-banner.mp4" type="video/mp4" />
      </video>

      <div className="hidden lg:flow-root w-full container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
          <HeroSearchForm currentPage="Stays" currentTab="Stays" />
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
