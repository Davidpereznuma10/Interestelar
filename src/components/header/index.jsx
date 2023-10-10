import React from "react";
import { Logo } from "./icon/logo.jsx";
import './style/index.css';
import { UserName } from "./users/name.jsx";
import { UserImage } from "./users/image.jsx";

function Header({ username, discordUserID, avatar, showUserName, toggleUserName }) {
  return (
    <header className="header">
      <div className="container">
          <Logo />
        <div
          className={`user ${showUserName ? 'show-name' : ''}`}
          onClick={toggleUserName}
        >
        <UserImage 
          discordUserID={discordUserID} 
          avatar={avatar} 
        />
        {showUserName ? <UserName username={username} /> : null}
        </div>
      </div>
    </header>
  );
}

export { Header };
