import { useState } from "react";
import "./App.css";
import logo from "./assets/mlogo.png";
import man_img from"./assets/man.png"
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import About from "./components/about/about";
import Work from "./components/Work/work";
import Services from "./components/services/services";
import { Route,Routes } from "react-router-dom";
import Testinomal from "./components/testinomal/testinomal";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/contact";
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Work/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/testinomal" element={<Testinomal/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </>
  );
}

export default App;
