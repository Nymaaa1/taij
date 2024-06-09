"use client";
import React, { FC } from "react";
import rightImgs from "@/app/components/images/about-hero-right.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import coffeeShopLogo2 from "@/app/components/images/logos/restaurant-logo.png";

export interface HotPotRestaurantProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const HotPotRestaurant: FC<HotPotRestaurantProps> = ({
  className = "lg:py-14",
  rightImg = rightImgs,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Hot pot Restaurant
        </span>
        <Image src={coffeeShopLogo2} alt="My Photo" width="160" height="160" />

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Цагийн хуваарь" />
            <span className="block text-xl font-semibold">10:00 - 22:00</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              170 хүн хүлээж авах хүчин чадалтай Тайж hot pot ресторан нь 10:00
              цагаас үдшийн 22:00 цаг хүртэл танд үйлчлэн ажиллаж байна.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Хамт олон " />
            <span className="block text-xl font-semibold">Үйлчилгээ</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Манай ресторан нь хятад тогоочийн амталсан нарийн хоол, өөрийн
              сонирхолд нийцүүлэн хийж идэх халуун тогоо, болон Ази чиг урсгалыг
              барин үйлчилгээ явуулж байна.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Давуу тал " />
            <span className="block text-xl font-semibold">Үйлчилгээ</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Манай рестораны давуу тал тав тухтай найрсаг үйлчилгээ, хоолны
              давтагдашгүй амт чанарыг тан бүхэндээ санал болгож байна.
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
    </div>
  );
};

export default HotPotRestaurant;
