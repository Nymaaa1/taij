"use client";

import React, { useEffect, useRef, useState } from "react";
import { PathName } from "@/app/components/routers/type";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { useThemeMode } from "@/app/components/utils/useThemeMode";

export type SiteHeaders = "Header 1";

// let OPTIONS = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 1.0,
// };
// let OBSERVER: IntersectionObserver | null = null;

const SiteHeader = () => {
  const anchorRef = useRef<HTMLDivElement>(null);

  // const [isTopOfPage, setIsTopOfPage] = useState(true);

  // useEffect(() => {
  //   setIsTopOfPage(window.pageYOffset < 5);
  // }, []);
  //
  useThemeMode();
  //
  const pathname = usePathname();

  // const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
  //   entries.forEach((entry) => {
  //     setIsTopOfPage(entry.isIntersecting);
  //   });
  // };

  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";

    headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";

    return <Header className={headerClassName} navType="MainNav1" />;
  };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
