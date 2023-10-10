import React from "react";

function VideosComponent({ videos }) {
  return (
    <div className="tab-content">
      {videos.map((video, index) => (
        <div key={index} className="tab-item">
          <a href={video.props.href}>{video.props.children}</a>
        </div>
      ))}
    </div>
  );
}

export { VideosComponent };
