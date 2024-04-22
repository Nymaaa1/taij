import rightImg from "@/app/components/images/about-hero-right.png";
import React, { FC } from "react";
import SectionHero from "./SectionHero";
import BgGlassmorphism from "@/app/components/header/BgGlassmorphism";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      <BgGlassmorphism />
      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={rightImg}
          heading="👋 Restaurant"
          btnText=""
          subHeading="We’re impartial and independent, and every day we create distinctive, world-class programmes and content which inform, educate and entertain millions of people in the around the world."
        />
        {/* <SectionFounder />
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <SectionStatistic />

        <SectionSubscribe2 /> */}
      </div>
    </div>
  );
};

export default PageAbout;
