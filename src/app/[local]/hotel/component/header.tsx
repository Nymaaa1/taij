import React, { FC, ReactNode } from "react";
import roomImage from "@/app/components/images/rooms/room-2.jpg";
import HeroSearchForm from "@/app/(widget)/(client-components)/(HeroSearchForm)/HeroSearchForm";

export interface HeaderRoomsPageProps {
  className?: string;
  listingType?: ReactNode;
}

const HeaderRoomsPage: FC<HeaderRoomsPageProps> = ({
  className = "",
  listingType,
}) => {
  return (
    <div
      className={`nc-HeaderRoomsPage flex flex-col relative bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${roomImage.src})` }}
      data-nc-id="HeaderRoomsPage"
    >
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-6 lg:space-y-10 pb-14 lg:pb-64 xl:pb-80 xl:pr-14 lg:mr-10 xl:mr-0">
            <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl leading-[110%] text-white">
              Deluxe room
            </h2>
            <div className="flex items-center md:text-lg text-neutral-300 dark:text-neutral-300">
              <i className="text-2xl las la-map-marked"></i>
              <span className="ml-2.5">Mongolia </span>
              <span className="mx-5"></span>
              {listingType}
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="hidden lg:flow-root w-full">
            <div className="z-10 lg:-mt-40 xl:-mt-56 w-full">
              <HeroSearchForm currentPage="Stays" currentTab="Stays" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderRoomsPage;
