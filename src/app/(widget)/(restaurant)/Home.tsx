"use client";
import React, { FC } from "react";
import "./Home.scss";

export interface RestaurantHomeProps {}

const RestaurantHome: FC<RestaurantHomeProps> = ({}) => {
  return (
    <div className="restaurant-fixed-bg">
      <h1 className="mb-4 font-bold">Restaurant</h1>
      <p>WELCOME</p>
    </div>
  );
};

export default RestaurantHome;
