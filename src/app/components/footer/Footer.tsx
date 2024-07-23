"use client";

import Logo from "@/app/components/shared/Logo";
import SocialsList1 from "@/app/components/shared/SocialsList1";
import { CustomLink } from "@/app/data/types";
import React from "react";
import { useTranslations } from "next-intl";
import coffeeShopLogo from "@/app/components/images/logos/coffee-shop-logos.png";
import reastaurantLogo from "@/app/components/images/logos/restaurant-logo.png";
import coffeeShopLogo2 from "@/app/components/images/logos/coffee-shop-logo2.png";
import reastaurantLogo2 from "@/app/components/images/logos/restaurant-logo2.png";
import Image from "next/image";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const Footer: React.FC = () => {
  const t = useTranslations();
  const translatedValues: WidgetFooterMenu[] = t.raw("Footer");
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      {/* <FooterNav /> */}
      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
            <div className="col-span-2 md:col-span-1">
              <Logo />
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" />
            </div>
          </div>
          <div>
            <Image
              src={coffeeShopLogo}
              alt="My Photo"
              width="100"
              height="100"
            />
            <Image
              src={reastaurantLogo2}
              alt="My Photo"
              width="100"
              height="100"
            />
          </div>
          <div>
            <Image
              src={coffeeShopLogo2}
              alt="My Photo"
              width="160"
              height="160"
            />
            <Image
              src={reastaurantLogo}
              width="160"
              height="160"
              alt="My Photo"
            />
          </div>
          {translatedValues.map(renderWidgetMenuItem)}
        </div>
      </div>
    </>
  );
};

export default Footer;
