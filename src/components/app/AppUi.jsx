import React from "react";
import { Main } from "../Principal/Main"
import { Context } from "../contex";
import { Header } from "../Principal/header"; 
import { Curses } from "../Principal/curses";
import { Footer } from "../Principal/footer";

function AppUi(){
React.useContext(Context)
return(
    <>
        <Header></Header>
        <Main>
            <Curses/>
        </Main>
        <Footer></Footer>
    </>
);
}
export  { AppUi }