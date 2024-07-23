"use client";
import React, { FC } from "react";
import "./Home.scss";
import { useTranslations } from "next-intl";

export interface AboutHomeProps {}

const AboutHome: FC<AboutHomeProps> = ({}) => {
  const message = useTranslations("About");
  return (
    <div className="fixed-bg">
      <h1 className="mb-4 font-bold">{message("header")}</h1>
      <p> {message("welcome")}</p>
    </div>
  );
};

export default AboutHome;
