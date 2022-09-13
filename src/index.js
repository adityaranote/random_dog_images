import  ReactDOM  from "react-dom/client"; 

import React from "react";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
);


let a = 10 

function aditya(){
     let a = 16
    
      a = 20
    console.log(a)
}

aditya()