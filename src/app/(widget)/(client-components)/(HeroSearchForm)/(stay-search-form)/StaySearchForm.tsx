import React, { FC } from "react";
import LocationInput from "../LocationInput";
import StayDatesRangeInputMobile from "./StayDatesRangeInput";
import GuestsInputHome from "../GuestInputHome";
// Home Screen
const StaySearchForm: FC<{}> = ({}) => {
  const renderForm = () => {
    return (
      <form className="w-full relative mt-8 flex rounded-full shadow-xl dark:shadow-2xl bg-white dark:bg-neutral-800 ">
        <LocationInput className="flex-[1.5]" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <StayDatesRangeInputMobile className="flex-1" />
        <div className="self-center border-r border-slate-200 dark:border-slate-700 h-8"></div>
        <GuestsInputHome className="flex-1" />
      </form>
    );
  };

  return renderForm();
};

export default StaySearchForm;
