import React from "react";
import './style.css'
import { AboutMe } from './AboutMe/index.jsx'
import InteretelarLogoGif from '../../public/logo.svg';
import { AboutProject } from "./AboutProject";

function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <div className="logo-container">
      <img  src={InteretelarLogoGif} alt="Interetelar Logo" className="logo-image" />
    </div>
      </div>
      <div className="column project">
        <AboutProject/>
      </div>
      <div className="column">
        <AboutMe/>
      </div>
    </footer>
  );
}

export { Footer };
