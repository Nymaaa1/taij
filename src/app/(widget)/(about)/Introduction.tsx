"use client";
import React, { FC } from "react";
// import rightImgs from "/restaurant/1.jpg";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import coffeeShopLogo2 from "@/app/components/images/logos/logo.png";

export interface AboutIntroductionProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const AboutIntroduction: FC<AboutIntroductionProps> = ({
  className = "lg:py-14",
  // rightImg = rightImgs,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={"/about1.jpg"} alt="" width={1000} height={100} />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          TAIJ business hotel
        </span>

        <Image src={coffeeShopLogo2} alt="My Photo" width="100" height="100" />
        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Товч танилцуулга" />
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              “Тайж бридж групп” нь ХХК ны “ Тайж палас” зочид буудал нь
              Улаанбаатар хот Баянгол дүүргийн 4-р хорооны ЭТӨЧ-96 тоот оршино.
              “Тайж палас” зочид буудал нь 2019.06.07 нд үүсгэнэ байгуулагдаж
              монгол улсын зочилох үйлчилгээний салбарт 4 одны зэрэглэл бүхий
              зочид буудлыг ашиглалтанд оруулж үүд хаалгаа нээнэ ажиллаж байна.
            </span>
          </li>
          <li className="space-y-4">
            {/* <Badge color="green" name="Танилцуулга" /> */}
            <span className="block text-lg font-semibold"> 1-р давхарт</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Караоке, Кофе шоп, Ресепшин
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-lg font-semibold"> 2-р давхарт</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              “Edelweiss” ресторан нь VIP өрөөнүүд.,200-250 хүн хүлээж авах
              хүчин чадалтай мастер тогоочийн шинэ шинэлэг хоол , бүх төрлийн
              хүлээн авалт арга хэмжээ, амьд хөгжмийн хамтлагийн тоглолт
              үзүүлбэр, тогтмол өдрүүдэд тогоочийн хоолны өдөрлөг, жуулчины
              улиралд жуулчидад зориулсан монгол ахуй, соел урлагийн арга
              хэмжээ, европ өглөөний цайны шинэлэг үйлчилгээ, хүргэлтийн
              үйлчилгээг нэвтрүүлж байна.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-lg font-semibold"> 3-р давхарт</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              3-р давхарт “ Тайж” Hot pot ази ресторант VIP өрөөнүүд. /150-175
              хүн хүлээж авах хүчин чадалтай/ манай ресторан нь хятад, монгол,
              ази чадварлаг тогооч нарын хоолоор үйлчилж, hot pot, ази хоолны
              соёлыг нэвтрүүлж байнаа.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-lg font-semibold">4,5,6-р давхарт</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              4,5,6-р давхарууд 4 одны зэрэглэл хангахуйц зочид буудлын
              өрөөнүүд. Зочид буудлын өрөөнүүд нь стандарт, хагас люкс, бүтэн
              люкс, гэр бүлийн өрөө, ерөнхийлөгчийн өрөө зэрэг 5 зэрэглэлийн 10
              ангилалын 72 ортой, 39 өрөөтэй.
            </span>
          </li>
          <li className="space-y-4">
            <span className="block text-lg font-semibold">7-р давхарт</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              “Тайж бридж групп” ХХК-ийн удирлагын оффис, 20-30 хүнийн хурлын
              танхим, “Тайж фиттнес” төв, “Тайж” аялал жуучлалын компаний
              удирдагийн оффис гэх мэт байрлана.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutIntroduction;
