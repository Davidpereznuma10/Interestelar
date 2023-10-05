import React from "react";
import InteretelarLogoGif from '../../../public/logo.gif'; 
import './logo.css'

function Logo() {
  return (
    <div className="logo-container">
      <img  src={InteretelarLogoGif} alt="Interetelar Logo" className="logo-image" />
    </div>
  );
}

export { Logo };
