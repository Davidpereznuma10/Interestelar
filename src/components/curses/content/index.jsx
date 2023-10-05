import React from 'react';
import './style.css';

const Content = ({ title, description }) => {
  return (
    <div className="content">
      <h2 className="title-courses ">{title}</h2>
      <p className="description">{description}</p>
    </div>
  );
};

export { Content };
