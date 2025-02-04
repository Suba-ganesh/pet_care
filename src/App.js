import React from "react";
import './App.css';
import Nav from "./components/Nav";
import Main from "./components/Main";
import About from "./components/About";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import NumeralsDemo from "./components/Textbox";
import Reactprime from "./components/Textbox";
import Textarea from "./components/Textarea";
import Date from "./components/Date";
import Upload from "./components/Upload";



function App(){
   return ( <div className="app">
   <h1>Input-box</h1>
    <Reactprime/>
    <h1>Textarea</h1>
    <Textarea label="hai" rows="1" cols="9" textarea_style=""/>
    <h1>date</h1>
    <Date datestyle="w-2"/>
    <h1>Upload</h1>
    <Upload/>
   </div>)
   ;
}

export default App;