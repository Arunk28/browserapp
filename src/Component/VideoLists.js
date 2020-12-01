import React from "react";
import VideoItem from "./VideoItem";
const VideoList = ({ vi, onVideoSelect }) => {
  const list = vi.map((video) => {
    return <VideoItem vitem={video} onVideoSelect={onVideoSelect} />;
  });
  return <div className="ui relaxed  divided list">{list}</div>;
};

export default VideoList;
