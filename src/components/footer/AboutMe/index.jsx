import React from "react";
import { Instagram } from "./icons/instagram";
import { GitHub } from "./icons/github";
import { Linkedin } from "./icons/linkedin";
import { Photo } from "./icons/photo";

function AboutMe(){
    return (
        <div>
            <Photo/>
            <div className="social-icons">
                <Linkedin/>
                <GitHub/>
                <Instagram/>
            </div>
        </div>
    )
}

export {  AboutMe }