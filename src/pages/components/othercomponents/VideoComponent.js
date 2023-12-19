import React from "react";
import videoSource from "../../../assets/videos/vid1.mp4";

const VideoComponent = () => {
  return (
    <video
      className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
      autoPlay
      muted
      loop={true}
    >
      <source src={videoSource} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
