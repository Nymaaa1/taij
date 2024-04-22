"use client";

import React, { FC, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/app/components/data/Listings";
import ButtonClose from "@/app/components/shared/ButtonClose";
import StayCard2 from "@/app/components/shared/StayCards";
import GoogleMaps from "./GoogleMaps";

const DEMO_STAYS = DEMO_STAY_LISTINGS.filter((_, i) => i < 12);
export interface SectionGridHasMapProps {}

const SectionGridHasMap: FC<SectionGridHasMapProps> = () => {
  const [currentHoverID, setCurrentHoverID] = useState<string | number>(-1);
  const [showFullMapFixed, setShowFullMapFixed] = useState(false);
  return (
    <div>
      <div className="relative flex min-h-screen">
        {/* CARDSSSS */}
        <div className="min-h-screen w-full xl:w-[780px] 2xl:w-[880px] flex-shrink-0 xl:px-8 ">
          <div className="grid grid-cols-1 gap-8">
            {DEMO_STAYS.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setCurrentHoverID((_) => item.id)}
                onMouseLeave={() => setCurrentHoverID((_) => -1)}
              >
                <StayCard2 data={item} />
              </div>
            ))}
          </div>
        </div>

        <div
          className="flex xl:hidden items-center justify-center fixed bottom-16 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-neutral-900 text-white shadow-2xl rounded-full z-30  space-x-3 text-sm cursor-pointer"
          onClick={() => setShowFullMapFixed(true)}
        >
          <i className="text-lg las la-map"></i>
          <span>Show map</span>
        </div>
        <div
          className={`xl:flex-grow xl:static xl:block ${
            showFullMapFixed ? "fixed inset-0 z-50" : "hidden"
          }`}
        >
          {showFullMapFixed && (
            <ButtonClose
              onClick={() => setShowFullMapFixed(false)}
              className="bg-white absolute z-50 left-3 top-3 shadow-lg rounded-xl w-10 h-10"
            />
          )}

          <div className="fixed xl:sticky top-0 xl:top-[88px] left-0 w-full h-full xl:h-[calc(100vh-88px)] rounded-md overflow-hidden">
            <GoogleMaps />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionGridHasMap;
