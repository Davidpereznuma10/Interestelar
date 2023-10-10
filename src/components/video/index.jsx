import React, { useRef} from "react";
import "./style.css";
import { CustomerRows } from "./constumer/index.jsx";

function Video({ activeTab, links, comments, videos, handleTabClick, altValue, handleLinkClick }) {
  const videoRef = useRef(null);
  return (
    <>
        <div className="video-container">
            <video ref={videoRef} controls>
                <source src={altValue} type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
        </div>
        <div className="video-costumer">
            <CustomerRows
            activeTab={activeTab}
            links={links}
            comments={comments}
            videos={videos}
            handleTabClick={handleTabClick}
            handleLinkClick={handleLinkClick} // Asegúrate de pasar handleLinkClick aquí
            />
        </div>
    </>
  );
}


export { Video };
