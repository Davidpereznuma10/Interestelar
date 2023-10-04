import React from "react";
import { GrGithub } from "react-icons/gr";
import './style.css'


function GitHub(){
    return (
        <a href="https://github.com/Davidpereznuma10">
            <GrGithub className="github-icon"/>
        </a>
    )
}

export { GitHub }