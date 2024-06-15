"use client";
import React, { FC } from "react";
import "./Home.scss";

export interface KaraokeHomeProps {}

const KaraokeHome: FC<KaraokeHomeProps> = ({}) => {
  return (
    <div className="karaoke-fixed-bg">
      <h1 className="mb-4 font-bold">Karaoke</h1>
      <p>WELCOME</p>
    </div>
  );
};

export default KaraokeHome;
