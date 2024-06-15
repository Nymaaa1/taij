"use client";
import React, { FC } from "react";
import "./Home.scss";
import { useTranslations } from "next-intl";

export interface RestaurantHomeProps {}

const RestaurantHome: FC<RestaurantHomeProps> = ({}) => {
  const message = useTranslations("Restaurant");
  return (
    <div className="restaurant-fixed-bg">
      <h1 className="mb-4 font-bold">{message("header")}</h1>
      <p>{message("welcome")}</p>
    </div>
  );
};

export default RestaurantHome;
