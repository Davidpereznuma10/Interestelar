import React from "react";

function UserImage({ discordUserID, avatar }) {
  return (
    <div className="user-image-container">
      <img
        src={`https://cdn.discordapp.com/avatars/${discordUserID}/${avatar}.png`}
        alt=""
        className="user-image"
      />
    </div>
  );
}

export { UserImage }
