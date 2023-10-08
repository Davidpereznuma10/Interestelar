import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link
import { Image } from "./images/index.jsx";
import { Content } from "./content/index.jsx";
import axios from 'axios';
import './style.css';

function Curses() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get('http://127.9.63.7:5161/api/v1/courses');
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error)
      return [];
    }
  };

  useEffect(() => {
    async function fetchData() {
      const coursesData = await getData();
      setData(coursesData);
    }
    fetchData();
  }, []);

  const [isHovered, setIsHovered] = useState(new Array(6).fill(false));

  const handleMouseEnter = (index) => {
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = true;
    setIsHovered(updatedIsHovered);
  };

  const handleMouseLeave = (index) => {
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = false;
    setIsHovered(updatedIsHovered);
  };

  return (
    <div className="container-wrapper">
        {data.map((course, index) => (
          <Link
            key={index} 
            to={`/Video?course=${course.apiCourseName}&section=${course.sections[0]?.sectionName || ''}&video=${course.sections[0]?.videos[0]?.nombreDelVideo || ''}`}
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
