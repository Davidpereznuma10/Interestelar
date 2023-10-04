import React from "react";
import './index.css'

function Main({ children }){
    return (
        <div id="main" className="container">
            {children}
        </div>
    );
}

export { Main }

