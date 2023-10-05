import React, { useRef } from "react";
import "./style.css";
import { CostumerRows } from "./constumer";

function Video() {
  const videoRef = useRef(null);

  return (
    <>
        <div className="video-container">
            <video ref={videoRef} controls>
                <source src="#" type="video/mp4" />
                Tu navegador no soporta la reproducción de video.
            </video>
        </div>
        <div className="video-costumer">
            <CostumerRows/>
        </div>
    </>
  );
}

export { Video };
