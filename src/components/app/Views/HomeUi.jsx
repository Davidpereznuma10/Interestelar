import React from "react";
import { Context } from "../../contex/index.jsx";
import { Header } from "../../header/index.jsx";
import { Sidebar } from "../../sidebar/index.jsx";
import { Main } from "../../Main/index.jsx";
import { Curses } from "../../curses/index.jsx";
import { CourseLoading } from "../../loading/cursesLoadin.jsx";
import { Footer } from "../../footer/index.jsx";

function HomeUi() {
  const {
    data,
    handleMouseEnter,
    handleMouseLeave,
    logoutevent,
    isHovered,
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
  } = React.useContext(Context);

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
      <Main>
        {data.length === 0 ? (
            <CourseLoading />
        ) : (
          <Curses 
            data={data}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            isHovered={isHovered}
          />
        )}
      </Main>

      <Footer />
    </>
  );
}

export { HomeUi };
