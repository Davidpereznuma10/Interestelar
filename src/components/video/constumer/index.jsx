// CostumerRows.js
import React, { useState } from "react";
import "./style.css"; // Importa el archivo CSS

function TabContent(props) {
  return (
    <div className={`tab-content ${props.active ? "active-tab" : ""}`}>
      {props.items.map((item, index) => (
        <div key={index} className="tab-item">
          {item}
        </div>
      ))}
    </div>
  );
}

function CostumerRows() {
  const [activeTab, setActiveTab] = useState("Links"); // Estado para controlar la pestaña activa

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Datos de ejemplo para las pestañas
  const links = [
    { linkTitle: "Enlace 1", link: "https://www.ejemplo.com/enlace1" },
    { linkTitle: "Enlace 2", link: "https://www.ejemplo.com/enlace2" },
    { linkTitle: "Enlace 3", link: "https://www.ejemplo.com/enlace3" },
  ];

  const comments = [
    { username: "Usuario1", comment: "¡Excelente video!" },
    { username: "Usuario2", comment: "Me gustaría aprender más sobre este tema." },
    { username: "Usuario3", comment: "Gracias por compartir esto." },
  ];

  const videos = [
    { title: "Video 1", fileType: "video", video: "https://www.ejemplo.com/video1", text: "Descripción del Video 1" },
    { title: "Video 2", fileType: "video", video: "https://www.ejemplo.com/video2", text: "Descripción del Video 2" },
    { title: "Video 3", fileType: "video", video: "https://www.ejemplo.com/video3", text: "Descripción del Video 3" },
  ];

  return (
    <div className="costumer-rows">
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
      <TabContent items={links.map(link => <a href={link.link}>{link.linkTitle}</a>)} active={activeTab === "Links"} />
      <TabContent items={comments.map((comment, index) => (
        <div key={index} className="comment">
          <span className="username">{comment.username}:</span> {comment.comment}
        </div>
      ))} active={activeTab === "Comments"} />
      <TabContent items={videos.map(video => <a href={video.video}>{video.title}</a>)} active={activeTab === "Videos"} />
    </div>
  );
}

export { CostumerRows };
