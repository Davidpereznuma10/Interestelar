import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css"; // Importa el archivo CSS

function TabContent(props) {
  return (
    <div className={`tab-content ${props.active ? "active-tab" : ""}`}>
      {props.items.map((item, index) => (
        <div key={index} className="tab-item">
          {item}
        </div>
      ))}
    </div>
  );
}

function CustomerRows() {
  const [activeTab, setActiveTab] = useState("Links");
  const [links, setLinks] = useState([]);
  const [comments, setComments] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    try {
      // Obtener la información de los cursos desde tu base de datos
      const coursesResponse = await axios.get("http://127.9.63.7:5161/api/v1/courses");
      const courses = coursesResponse.data;

      // Generar las URLs para todas las secciones y nombres de video de cada curso
      const allLinks = [];
      const allComments = [];
      const allVideos = [];

      courses.forEach((course) => {
        const courseName = course.apiCourseName;

        course.sections.forEach((section) => {
          const sectionName = section.sectionName;

          // Generar las URLs de video para esta sección
          section.videos.forEach((video) => {
            const videoName = video.title;
            const videoURL = `http://192.168.128.23:5010/cursos/play?course=${courseName}&seccion=${sectionName}&video=${videoName}`;

            allLinks.push(<a href={videoURL}>{videoName}</a>);

            // Obtener los comentarios y enlaces del video
            const videoComments = video.comments.map((comment) => ({
              userName: comment.userName,
              comment: comment.comment,
              videoName: videoName,
            }));

            allComments.push(...videoComments);
            allVideos.push(<a href={videoURL}>{videoName}</a>);
          });
        });
      });

      setLinks(allLinks);
      setComments(allComments);
      setVideos(allVideos);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="customer-rows">
      <div className="tab-header">
        <div
          className={`tab-button ${activeTab === "Links" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("Links")}
        >
          Links
        </div>
        <div
          className={`tab-button ${activeTab === "Comments" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("Comments")}
        >
          Comments
        </div>
        <div
          className={`tab-button ${activeTab === "Videos" ? "active-tab" : ""}`}
          onClick={() => handleTabClick("Videos")}
        >
          Videos
        </div>
      </div>
      <TabContent items={links} active={activeTab === "Links"} />
      <TabContent items={comments.map((comment, index) => (
        <div key={index} className="comment">
          <span className="username">{comment.userName}:</span> {comment.comment} ({comment.videoName})
        </div>
      ))} active={activeTab === "Comments"} />
      <TabContent items={videos} active={activeTab === "Videos"} />
    </div>
  );
}

export { CustomerRows };
