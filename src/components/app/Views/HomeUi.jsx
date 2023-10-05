import React from "react";
import { Context } from "../../contex/index.jsx";
import { Header } from "../../header/index.jsx"; 
import { Sidebar } from "../../sidebar/index.jsx";
import { Main } from "../../Main/index.jsx"
import { Curses } from "../../curses/index.jsx";
import { Footer } from "../../footer/index.jsx";

function HomeUi(){
React.useContext(Context)
return(
    <>
        <Header></Header>
        <Sidebar/>
        <Main>
            <Curses/>
        </Main>
        <Footer></Footer>
    </>
);
}
export  { HomeUi }