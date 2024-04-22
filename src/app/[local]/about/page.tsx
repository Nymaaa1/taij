import React, { FC } from "react";
import VideoPage from "@/app/(widget)/(server-components)/Video";

export interface SectionOurFeaturesProps {}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({}) => {
  return (
    <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
      <VideoPage/>
    </div>
  );
};

export default SectionOurFeatures;
