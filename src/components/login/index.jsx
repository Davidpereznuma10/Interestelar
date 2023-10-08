import React from "react";
import './style.css'
import astronaut from '../../public/stronaut.svg'
import planet from '../../public/planet.svg'
import starts from '../../public/stars.svg'
import satelite from '../../public/satelite.svg';

function Login() {
  const handleDiscordButtonClick = () => {
    window.location.href = "http://127.9.63.7:5161/api/v1/login/";

  };

  return (
    <div className="login-container">
      <div className="btn">
        <button onClick={handleDiscordButtonClick}>
          <div className="text">LOGIN</div>

          <img src={planet} className="planet" alt="planet" />

          <div className="img">
            <img src={starts} className="stars" alt="stars" />
            <img src={astronaut} className="astronaut" alt="astronaut" />
          </div>
        </button>
        <img src={satelite} className="satalite" alt="satalite" />
      </div>
    </div>
  );
}

export { Login };
