import React from "react";

function Documents({ isDocumentationOpen, toggleDocumentation, toggleResources,toggleDocuments, isResourcesOpen, isDocumentsOpen }) {
    return (
        <div className="content">
            <ul className={`menu-list ${isDocumentationOpen ? 'open' : ''}`}>
                <li onClick={toggleDocumentation}>Documentación Discord</li>
                {isDocumentationOpen && (
                    <ul>
                        <li onClick={toggleResources}>
                            Recursos
                            {isResourcesOpen && (
                                <ul>
                                    <li>Recurso-git</li>
                                    <li>Recurso-docker</li>
                                    <li>Recurso-React</li>
                                </ul>
                            )}
                        </li>
                        <li onClick={toggleDocuments}>
                            Documentos
                            {isDocumentsOpen && (
                                <ul>
                                    <li>Documentos-git</li>
                                    <li>Documentos-docker</li>
                                    <li>Documentos-React</li>
                                </ul>
                            )}
                        </li>
                    </ul>
                )}
            </ul>
        </div>
    );
}

export { Documents };
