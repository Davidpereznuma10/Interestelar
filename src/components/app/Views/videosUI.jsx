import React, { useState } from "react";
import { Context } from "../../contex/index.jsx";
import { Header } from "../../header/index.jsx"; 
import { Sidebar } from "../../sidebar/index.jsx";
import { Footer } from "../../footer/index.jsx";
import { Video } from "../../video/index.jsx";

function VideoUi() {
  const {
    altValue,
    activeTab, 
    links, 
    comments, 
    videos, 
    handleTabClick,
    logoutevent,
    userData,
    showUserName,
    toggleUserName,
    toggleDocuments,
    toggleResources,
    toggleMenu,
    toggleDocumentation,
    isMenuOpen,
    isDocumentationOpen,
    isResourcesOpen,
    isDocumentsOpen,
    handleLinkClick, // Asegúrate de que handleLinkClick esté disponible en el contexto.
  } = React.useContext(Context);

  // Agregar estado para controlar la reproducción del video.
  const [isVideoPlaying, setVideoPlaying] = useState(false);

  // Función para manejar el clic en el enlace del video.
  const handleClickVideoLink = (videoUrl) => {
    // Cambiar el estado para indicar que el video está reproduciéndose.
    setVideoPlaying(true);
    // Aquí puedes realizar otras acciones, como abrir un reproductor de video personalizado, etc.
    // Puedes usar videoUrl para cargar el video en el reproductor.
  };

  return (
    <>
      <Header
        username={userData ? userData.username : ""}
        discordUserID={userData ? userData.discordUserID : ""}
        avatar={userData ? userData.avatar : ""}
        showUserName={showUserName}
        toggleUserName={toggleUserName}
      />
      <Sidebar
        toggleMenu={toggleMenu}
        toggleDocumentation={toggleDocumentation}
        isMenuOpen={isMenuOpen}
        isDocumentationOpen={isDocumentationOpen}
        isResourcesOpen={isResourcesOpen}
        isDocumentsOpen={isDocumentsOpen}
        toggleResources={toggleResources}
        toggleDocuments={toggleDocuments}
        logoutevent={logoutevent}
      />
      <Video  
        activeTab={activeTab}
        links={links}
        comments={comments}
        videos={videos}
        handleTabClick={handleTabClick}
        handleLinkClick={handleLinkClick}
        altValue={altValue}
        isVideoPlaying={isVideoPlaying} 
        handleClickVideoLink={handleClickVideoLink} 
      />
      <Footer/>
    </>
  );
}

export  { VideoUi };
