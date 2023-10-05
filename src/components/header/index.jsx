/* header.jsx */

import React, { useState } from "react";
import { Logo } from "./icon/logo.jsx";
import './style/index.css';

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className="header">
      <div className="container">
        <Logo />
        <div
          className="user"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="user-image-container">
            <img
              src='#'
              alt=""
              className="user-image"
            />
          </div>
          <div className={`user-name ${isHovered ? 'show-name' : ''}`}>
            <span>{isHovered ? "David Pérez" : null}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Header };
