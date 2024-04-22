import React, { FC } from "react";
import SectionGridHasMap from "@/app/(widget)/(experience-listings)/SectionGridHasMap";
import SectionVideos from "../components/video/SectionVideos";
import BgGlassmorphism from "../components/header/BgGlassmorphism";
import SectionHeroArchivePage from "../(widget)/(server-components)/SectionHeroArchivePage";

export interface ListingRealEstateMapPageProps {}

const ListingRealEstateMapPage: FC<ListingRealEstateMapPageProps> = ({}) => {
  return (
    <div>
      <BgGlassmorphism />
      <div className="">
        <SectionHeroArchivePage
          currentPage="Experiences"
          currentTab="Experiences"
          listingType={
            <>
              <i className=" las la-door-open text-2xl"></i>
              <span className="ml-2.5">159 rooms</span>
            </>
          }
        />
      </div>
      <div className="container pb-24 lg:pb-28 2xl:pl-10 xl:pr-0 xl:max-w-none">
        <SectionGridHasMap />
      </div>
      <div className="container relative space-y-24 mb-24 lg:space-y-2 lg:mb-2 mt-2">
        <SectionVideos />
      </div>
    </div>
  );
};

export default ListingRealEstateMapPage;
