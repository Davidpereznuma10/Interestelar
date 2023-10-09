import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext();

function Provider({ children }) {
  const [showUserName, setShowUserName] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isResourcesOpen, setResourcesOpen] = useState(false);
  const [isDocumentsOpen, setDocumentsOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDocumentationOpen, setDocumentationOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(new Array(6).fill(false));

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleDocumentation = () => {
    setDocumentationOpen(!isDocumentationOpen);
  };

  const toggleResources = () => {
    setResourcesOpen(!isResourcesOpen);
  };

  const toggleDocuments = () => {
    setDocumentsOpen(!isDocumentsOpen);
  };

  const event = () => {
    window.location.href = "http://127.9.63.7:5161/api/v1/login/";
  };


  const logoutevent = () => {
    window.location.href = "http://127.9.63.7:5163/Login";
  };
  

  const toggleUserName = () => {
    setShowUserName(!showUserName);
  };

  const getUserData = async () => {
    try {
      const response = await axios.get(
        `http://127.9.63.7:5161/api/v1/user/davidpereznuma10`
      );
      return response.data;
    } catch (error) {
      console.error("Error al obtener la información del usuario:", error);
      throw error;
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const userData = await getUserData();
        setUserData(userData);
      } catch (error) {
        console.error("Error al obtener la información del usuario:", error);
      }
    }
    fetchData();
  }, []);

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
  const contextValue = {
    data,
    handleMouseEnter,
    handleMouseLeave,
    isHovered,
    event,
    logoutevent,
    showUserName,
    toggleUserName,
    userData,
    toggleDocuments,
    toggleResources,
    toggleMenu,
    toggleDocumentation,
    isMenuOpen, 
    isDocumentationOpen, 
    isResourcesOpen, 
    isDocumentsOpen, 
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

export { Context, Provider };
