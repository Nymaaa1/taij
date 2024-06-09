"use client";
import React, { FC, useState, useEffect } from "react";
import "./Home.scss";

export interface AboutHomeProps {}

const AboutHome: FC<AboutHomeProps> = ({}) => {
  return (
    <div className="fixed-bg">
      <h1 className="mb-4 font-bold">About Us</h1>
      <p> WELCOME</p>
    </div>
  );
};

export default AboutHome;
