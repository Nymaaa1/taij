"use client";

import React, { FC } from "react";
import StaySearchForm from "./(stay-search-form)/StaySearchForm";

export interface HeroRealEstateSearchFormProps {
  className?: string;
}

const HeroRealEstateSearchForm: FC<HeroRealEstateSearchFormProps> = ({
  className = "",
}) => {
  const renderForm = () => {
    return <StaySearchForm />;
  };

  return (
    <div
      className={`nc-HeroRealEstateSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
    >
      {renderForm()}
    </div>
  );
};

export default HeroRealEstateSearchForm;
