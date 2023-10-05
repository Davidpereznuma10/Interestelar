import React from "react";
import { Context } from "../contex";
import { Header } from "../Principal/header"; 
import { Sidebar } from "../Principal/sidebar";
import { Main } from "../Principal/Main"
import { Curses } from "../Principal/curses";
import { Footer } from "../Principal/footer";

function AppUi(){
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
export  { AppUi }