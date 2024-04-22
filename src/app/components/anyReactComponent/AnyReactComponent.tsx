import React, { FC } from "react";
import { DEMO_STAY_LISTINGS } from "@/app/components/data/Listings";
import { StayDataType } from "@/app/data/types";
// import Pagination from "@/app/components/shared/Pagination";
// import TabFilters from "./TabFilters";
import Heading2 from "@/app/components/shared/Heading";
import StayCard2 from "@/app/components/shared/StayCards";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2 />

      <div className="mb-8 lg:mb-11">
        {/* <TabFilters /> */}
      </div>
      <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((stay) => (
          <StayCard2 key={stay.id} data={stay} />
        ))}
      </div>
      <div className="flex mt-16 justify-center items-center">
        {/* <Pagination /> */}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
