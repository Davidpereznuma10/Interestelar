import React from "react";
import "./style.css";
import { LinksComponent } from "./resources/links.jsx";
import { CommentsComponent } from "./resources/comments.jsx";
import { VideosComponent } from "./resources/multimedia.jsx";

function CustomerRows({ activeTab, links, comments, videos, handleTabClick, handleLinkClick }) {
  return (
    <div className="customer-rows">
      <div className="tab-header">
        <div
          className={`tab-button ${activeTab === "Links" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("Links")}
        >
          Links
        </div>
        <div
          className={`tab-button ${activeTab === "Comments" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("Comments")}
        >
          Comments
        </div>
        <div
          className={`tab-button ${activeTab === "Videos" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("Videos")}
        >
          Videos
        </div>
      </div>
      {activeTab === "Links" && <LinksComponent links={links} />}
      {activeTab === "Comments" && <CommentsComponent comments={comments} />}
      {activeTab === "Videos" && <VideosComponent videos={videos} />}
    </div>
  );
}

export { CustomerRows };
