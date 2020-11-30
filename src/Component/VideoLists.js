import React from "react";
import VideoItem from './VideoItem';
const VideoList = ({vi}) => {
  const list = vi.map((video)=>{
    return <VideoItem vitem = {video} />
  })
  return <div>{list}</div>;
};

export default VideoList;
