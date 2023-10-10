import React from "react";
import { Link } from "react-router-dom";
import './cursesLoadin.css';

function CourseLoading() {
  return (
    <div className="container-wrapper">
      {Array.from({ length: 6 }, (_, i) => (
        <Link
          to="#"
          key={i}
          className="container-curses loading"
        >
          <div className="image loading"></div>
          <div className="content">
            <div className="title loading"></div>
            <div className="description loading"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export { CourseLoading };
