import React from 'react';
import './style.css';

const Image = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="image" />
    </div>
  );
};

export { Image };
