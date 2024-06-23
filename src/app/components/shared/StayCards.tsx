import React, { FC } from "react";
import GallerySlider from "@/app/components/shared/GallerySlider";
import { DEMO_STAY_LISTINGS } from "@/app/components/data/Listings";
import Badge from "@/app/components/shared/Badge";
import Link from "next/link";
import { useTranslations } from "next-intl";

export interface StayCardHProps {
  className?: string;
  roomName?: string;
}

const StayCardH: FC<StayCardHProps> = ({ className = "", roomName = "" }) => {
  const message = useTranslations(roomName);

  const renderSliderGallery = () => {
    return (
      <div className="relative flex-shrink-0 w-full md:w-72 ">
        <GallerySlider
          ratioClass="aspect-w-6 aspect-h-5"
          galleryImgs={message.raw("asset_image")}
          href={message("href")}
        />
      </div>
    );
  };

  const renderTienIch = () => {
    return (
      <div className="hidden sm:grid grid-cols-3 gap-2">
        <div className="space-y-3">
          {message
            .raw("amenities")
            .filter((_: any, i: number) => i < 2)
            .map((item: { name: String; icon: any }, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <i className={`text-3xl las ${item.icon} text-lg`}></i>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.name}
                </span>
              </div>
            ))}
        </div>
        <div className="space-y-3">
          {message
            .raw("amenities")
            .filter((_: any, i: number) => i >= 2 && i < 4)
            .map((item: { name: String; icon: any }, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <i className={`text-3xl las ${item.icon} text-lg`}></i>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.name}
                </span>
              </div>
            ))}
        </div>
        <div className="space-y-3">
          {message
            .raw("amenities")
            .filter((_: any, i: number) => i >= 4 && i < 6)
            .map((item: { name: String; icon: any }, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <i className={`text-3xl las ${item.icon} text-lg`}></i>
                <span className="text-sm text-neutral-500 dark:text-neutral-400">
                  {item.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    return (
      <div className="flex-grow p-3 sm:p-5 flex flex-col">
        <div className="space-y-2">
          <div className="text-md text-neutral-900 dark:text-neutral-100">
            <span>{message("name")}</span>
          </div>
        </div>
        <div className="hidden sm:block w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
        {renderTienIch()}
        <div className="w-14 border-b border-neutral-100 dark:border-neutral-800 my-4"></div>
        <div className="flex justify-between items-end">
          <span className="text-base font-semibold text-secondary-500">
            {message("price")}₮
            {` `}
            <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
              /{message("night")}
            </span>
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`nc-StayCardH group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow ${className}`}
    >
      <Link
        href={{ pathname: message("href") || "/" }}
        className="absolute inset-0"
      ></Link>
       {/* TODO ene hesegt ashilasan */}
      <div className="grid grid-cols-1 md:flex md:flex-row ">
        {renderSliderGallery()}
        {renderContent()}
      </div>
    </div>
  );
};

export default StayCardH;
