import React from "react";
import './index.css'

function Main({ children }){
    return (
        <> 
            <div className="container-titulo">
                <p className="lineas"></p>
                    <h2 className="title">Courses</h2>
                <p className="lineas"></p>    
            </div>
            <div id="main" className="container">
                {children}
            </div>
        </>
    );
}

export { Main }

