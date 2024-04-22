import React, { FC, ReactNode } from "react";

interface VideoPageProps {}

const VideoPage: FC<VideoPageProps> = ({}) => {
  return (
    <video autoPlay loop muted className="">
      <source src="homepage/robovice-banner.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPage;
