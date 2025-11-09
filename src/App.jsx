import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./page/Home";
import AboutUs from "./page/Aboutus";
import Service from "./page/Service";
import ContactUs from "./page/Contactus";
import Gallery from "./page/Gallery";

function App() {
  return (
    <div>
      
      <Header />
      <Home/>
        
     
    </div>
  );
}

export default App;
