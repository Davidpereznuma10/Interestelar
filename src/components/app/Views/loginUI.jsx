import React from "react";
import { Context } from "../../contex/index.jsx";
import { Login } from "../../login/index.jsx";
import { Footer } from "../../footer/index.jsx";

function LoginUi(){
React.useContext(Context)
return(
    <>
        <Login/>
        <Footer></Footer>
    </>
);
}
export  { LoginUi }