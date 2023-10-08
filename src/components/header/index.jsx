import React, { useState } from "react";
import { Logo } from "./icon/logo.jsx";
import './style/index.css';

const Header = () => {
  const [showUserName, setShowUserName] = useState(false);

  const toggleUserName = () => {
    setShowUserName(!showUserName);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-container">
          <Logo />
        </div>
        <div
          className={`user ${showUserName ? 'show-name' : ''}`}
          onClick={toggleUserName}
        >
          <div className="user-image-container">
            <img
              src='../../public/icon.svg'
              alt=""
              className="user-image"
            />
          </div>
          <span className="user-name">{showUserName ? "David Pérez" : null}</span>
        </div>
      </div>
    </header>
  );
}

export { Header };
