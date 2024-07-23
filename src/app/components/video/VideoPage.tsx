import React from "react";
// import Video from "../../../../public/video/homeVideo.mp4";

interface VideoPageScreenProps {
  url: string;
}

const VideoPageScreen: React.FC<VideoPageScreenProps> = ({ url }) => {
  return (
    <video autoPlay loop muted className="w-screen h-screen flex flex-col">
      <source src="homepage/robovice-banner.mp4" type="video/mp4" />
    </video>
  );
};

export default VideoPageScreen;
