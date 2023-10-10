import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
  const [data, setData] = useState([]);
  const [courseData, setCourseData] = useState(null);
  const [activeTab, setActiveTab] = useState("Links");
  const [links, setLinks] = useState([]);
  const [comments, setComments] = useState([]);
  const [videos, setVideos] = useState([]);
  const [altValue, setAltValue] = useState(false);



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

  const toggleUserName = () => {
    setShowUserName(!showUserName);
  };
  const handleLinkClick =async (alt) => {
    await setAltValue(alt); 
  };
  
  const event = () => {
    window.location.href = "http://127.9.63.7:5161/api/v1/login/";
  };


  const logoutevent = () => {
    window.location.href = "http://127.9.63.7:5163/Login";
  };

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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
   
  const  {courseName} = useParams();

  async function getCouseData() {
    try {
      const response = await axios.get(
        `http://127.9.63.7:5161/api/v1/courses/docker`
      );
      const courseData = response.data;
  
      const allLinks = [];
      const allComments = [];
      const allVideos = [];
  
      for (const sectionNumber in courseData.sections) {
        if (courseData.sections.hasOwnProperty(sectionNumber)) {
          const section = courseData.sections[sectionNumber];
  
          section.videos.forEach((video) => {
            const videoName = video?.video;
            const videoTitle = video?.title;
            const videoURL = `http://192.168.110.14:5010/cursos/play?course=${courseData.courseName}&seccion=${sectionNumber}&video=${videoName}`;
  
            allLinks.push(
              <a href='#' alt={videoURL} onClick={() => handleLinkClick(videoURL)}>{videoTitle}</a>
            );
  
            const videoComments = video.comments.map((comment) => ({
              userName: comment.userName,
              comment: comment.comment,
              videoName: videoName,
            }));
  
            allComments.push(...videoComments);
            allVideos.push(<a alt={videoURL}>{videoName}</a>);
          });
        }
      }
  
      setCourseData(courseData);
      setLinks(allLinks);
      setComments(allComments);
      setVideos(allVideos);
      
      return courseData;
    } catch (error) {
      console.error("Error fetching course data:", error);
      throw error;
    }
  }
  
  useEffect(() => {
    async function fetchData() {
      try {
        const courseData = await getCouseData();
        setCourseData(courseData);
      } catch (error) {
        console.error("Error al obtener la información del curso:", error);
      }
    }
    fetchData();
  }, []);
  
  
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

  const contextValue = {
    altValue,
    handleLinkClick,
    courseName,
    activeTab,
    links,
    comments,
    videos,
    handleTabClick,
    courseData,
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
