import React from "react";
import { GrInstagram } from "react-icons/gr";
import './style.css'


function Instagram() {
  return (
    <a href="https://www.instagram.com/tu-instagram">
        <GrInstagram className="instagram-icon" alt="Instagram" />
    </a>

  );
}

export { Instagram };
