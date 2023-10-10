import React from "react";
import { GrLinkedin } from "react-icons/gr";
import './style.css'

function Linkedin(){
    return(
        <a href="https://www.linkedin.com/in/davidpereznuma10" alt="linkedin">
            <GrLinkedin className="linkedin-icon"/>
        </a>
    )
}
export { Linkedin }