import React, { useState } from "react";
import { Button } from "./button/index.jsx";
import { Documents } from "./documents/index.jsx";
import { Logout } from "./logout/index.jsx";
import './styles.css';

function Sidebar() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isDocumentationOpen, setDocumentationOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const toggleDocumentation = () => {
        setDocumentationOpen(!isDocumentationOpen);
    };

    return (
        <>
            <Button isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <Button isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
                </div>
                <Documents isDocumentationOpen={isDocumentationOpen} toggleDocumentation={toggleDocumentation} />
                <Logout />
            </div>
        </>
    );
}

export { Sidebar };
