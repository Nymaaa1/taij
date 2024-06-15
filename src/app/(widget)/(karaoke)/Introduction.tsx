"use client";
import React, { FC } from "react";
import Image, { StaticImageData } from "next/image";
import Badge from "@/app/components/shared/Badge";
import coffeeShopLogo2 from "@/app/components/images/karaoke/karaoke3.jpg";

export interface KaraokeIntroductionProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const KaraokeIntroduction: FC<KaraokeIntroductionProps> = ({
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
        <Image
          src={"/karaoke/karaoke1.jpg"}
          alt=""
          width={1000}
          height={100}
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Taij Karaoke
        </span>
        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Цагийн хуваарь" />
            <span className="block text-xl font-semibold">11:00 - 23:00</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Үндсэн цэснээс гадна олон улсын буфет өглөөний зоогийг ажлын
              өдрүүдэд 11:00 - 14:00 цагийн хооронд тогтмол хамтлаг дуучдын
              тоглолтын хамтаар үйлчилж байна.
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Хүлээн авалт " />
            <span className="block text-xl font-semibold">Хүлээн авалт</span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
              Edelweiss ресторан нь 150-200 хүний багтаамжтай хүлээн авалт болон
              хурим найр, бүх төрлийн баяр ёслолын үйл ажиллагааг чадварлаг хамт
              олон мэргэжлийн өндөр түвшинд зохион байгуулдаг тул та бүхэн манай
              рестораныг сонгон үйлчлүүлнэ гэдэгт итгэлтэй байна.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default KaraokeIntroduction;
