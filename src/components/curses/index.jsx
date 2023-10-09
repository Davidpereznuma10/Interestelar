import React from "react";
import { Link } from "react-router-dom"; 
import { Image } from "./images/index.jsx";
import { Content } from "./content/index.jsx";
import './style.css';

function Curses({data, handleMouseEnter, handleMouseLeave, isHovered }) {

  return (
    <div className="container-wrapper">
        {data.map((course, index) => (
          <Link
            key={index} 
            to={`/Multimedia/${course.courseName}`}
            className={`container-curses ${isHovered[course.id] ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
          <Image src={course.image || ''} />
          <Content
            title={course.apiCourseName || ''}
            description={course.description || ''}
          />
        </Link>
      ))}
    </div>
  );
}

export { Curses };
