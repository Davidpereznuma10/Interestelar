import React, { useState } from "react";
import { Close } from "./icons/close";
import { Open } from "./icons/open";

function Button({ isMenuOpen, toggleMenu }) {
    return (
        <>
            <h1>Interestelar</h1>
            <button onClick={toggleMenu} className="menu-toggle">
                {isMenuOpen ? <Close/> : <Open/>}
            </button>
        </>
    );
}

export { Button };
