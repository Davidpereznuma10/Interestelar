import React from "react";
import { Button } from "./button/index.jsx";
import { Documents } from "./documents/index.jsx";
import { Logout } from "./logout/index.jsx";
import './styles.css';

function Sidebar({
    logoutevent,
    toggleMenu,
    toggleDocumentation,
    isMenuOpen,
    isDocumentsOpen,
    isResourcesOpen,
    isDocumentationOpen,
    toggleResources,
    toggleDocuments

  }) {
    return (
      <>
        <Button isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <Button isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>
          <Documents
              isDocumentationOpen={isDocumentationOpen}
              toggleDocumentation={toggleDocumentation}
              isResourcesOpen={isResourcesOpen}
              toggleResources={toggleResources}
              isDocumentsOpen={isDocumentsOpen} 
              toggleDocuments={toggleDocuments}
          />

          <Logout 
          logoutevent={logoutevent} 
          />
        </div>
      </>
    );
  }

export { Sidebar }
