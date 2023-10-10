import React from "react";

function LinksComponent({ links }) {
  return (
    <div className="tab-content active-tab">
      {links.map((link, index) => (
        <div key={index} className="tab-item">
          {link}
        </div>
      ))}
    </div>
  );
}

export  {LinksComponent};
