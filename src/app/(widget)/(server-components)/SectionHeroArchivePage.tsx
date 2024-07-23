"use client";
import React, { FC, useEffect, useState } from "react";
import HeroSearchForm from "../(client-components)/(HeroSearchForm)/HeroSearchForm";

type ObjectFit = "contain" | "cover" | "fill" | "none" | "scale-down";

export interface SectionHeroArchivePageProps {
  className?: string;
}

const SectionHeroArchivePage: FC<SectionHeroArchivePageProps> = ({
  className = "",
}) => {
  const [objectFit, setObjectFit] = useState<ObjectFit>("cover");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1245) {
        setObjectFit("none");
      } else {
        setObjectFit("cover");
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        style={{ inset: 0, objectFit: objectFit, height: "100vh" }}
      >
        <source src="homepage/robovice-banner.mp4" type="video/mp4" />
      </video>
      {/* hidden lg:flow-root w-full */}
      <div className="hidden lg:flow-root w-full container pt-10 pb-24 lg:pt-106 lg:pb-28">
        <div className="z-10 lg:-mt-20 xl:-mt-64 w-full flex justify-center items-center">
          <HeroSearchForm/>
        </div>
      </div>
    </div>
  );
};

export default SectionHeroArchivePage;
