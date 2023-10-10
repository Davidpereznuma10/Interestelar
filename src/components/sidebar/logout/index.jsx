import React from "react";
import { Left } from "./icon/icon";
import './style.css'

function Logout({logoutevent}) {
    return (
        <button 
            className="logout"
            onClick={logoutevent}  >
            <Left/>
        </button>
    );
}

export { Logout };
