import React from "react";
import { Context } from "../../contex/index.jsx";
import { Header } from "../../header/index.jsx"; 
import { Sidebar } from "../../sidebar/index.jsx";
import { Footer } from "../../footer/index.jsx";
import { Video } from "../../video/index.jsx";

function VideoUi(){
React.useContext(Context)
return(
    <>
        <Header></Header>
        <Sidebar/>
        <Video/>
        <Footer></Footer>
    </>
);
}
export  { VideoUi }