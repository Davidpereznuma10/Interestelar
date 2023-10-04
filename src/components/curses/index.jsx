import React, { useState } from "react";
import { Image } from "./images/index.jsx";
import { Content } from "./content/index.jsx";
import './style.css';

function Curses() {
  // Crear un array de estados locales para cada contenedor
  const [isHovered, setIsHovered] = useState(new Array(8).fill(false));

  const handleMouseEnter = (index) => {
    // Actualizar el estado del contenedor específico en el índice 'index'
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = true;
    setIsHovered(updatedIsHovered);
  };

  const handleMouseLeave = (index) => {
    // Actualizar el estado del contenedor específico en el índice 'index'
    const updatedIsHovered = [...isHovered];
    updatedIsHovered[index] = false;
    setIsHovered(updatedIsHovered);
  };

  return (
    <div className="container-wrapper">
      {isHovered.map((hovered, index) => (
        <div
          key={index}
          className={`container-curses ${hovered ? 'hovered' : ''}`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <Image />
          <Content
            title={'Nombre del curso'}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ex nec dolor facilisis fermentum. Phasellus gravida euismod tortor, a feugiat justo pellentesque non. Fusce et tortor nec purus suscipit efficitur. Sed malesuada, libero id laoreet finibus, urna libero ultricies lorem, eu cursus augue turpis sed ex. Sed auctor, urna ut suscipit laoreet, arcu nisl congue velit, id semper justo nunc a augue. Sed in est bibendum, aliquam erat at, feugiat ex. Vivamus nec tincidunt justo, vel malesuada justo. Suspendisse fringilla ante ut purus sollicitudin, eget congue nulla hendrerit. Vivamus semper, sapien non efficitur finibus, eros felis sollicitudin urna, eu tempor justo lectus id libero.'}
          />
        </div>
      ))}
    </div>
  );
}

export { Curses };
