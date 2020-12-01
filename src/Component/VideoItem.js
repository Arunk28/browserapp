import React from "react";

const VideoItem = ({ vitem, onVideoSelect }) => {
  return (
    <div
      className="item "
      onClick={() => {
        onVideoSelect(vitem);
      }}
    >
      <img src={vitem.snippet.thumbnails.medium.url} className="ui image"></img>
      <div className="content">
        <div className="header">{vitem.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
