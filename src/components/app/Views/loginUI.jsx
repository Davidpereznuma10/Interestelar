import React from "react";
import { Context } from "../../contex/index.jsx";
import { Footer } from "../../footer/index.jsx";

function LoginUi(){
React.useContext(Context)
return(
    <>
        
        <Footer></Footer>
    </>
);
}
export  { LoginUi }