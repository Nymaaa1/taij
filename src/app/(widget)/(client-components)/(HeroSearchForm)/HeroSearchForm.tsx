"use client";

import React, { FC } from "react";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";
export type SearchTab = "Stays" | "Experiences" | "Cars" | "Flights";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Stays" | "Experiences" | "Cars" | "Flights";
}
const HeroSearchForm: FC<HeroSearchFormProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      <ul className="pt-8 ml-2 sm:ml-6 md:ml-12 flex space-x-5 sm:space-x-8 lg:space-x-11 overflow-x-auto hiddenScrollbar"></ul>
      <StaySearchForm />
    </div>
  );
};

export default HeroSearchForm;
