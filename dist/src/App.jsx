import { useEffect, useRef, useState } from "react";
import About from "./Components/About/About";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Project from "./Components/Myproject/Project";
import Skills from "./Components/Myskill/Skills";
import Navbar from "./Components/NavBar/NavBar";
import  {} from "react-smooth"
function App() {

  return (
    <div >
  <Navbar/>
  <Header/>
  <About/>
  <Skills />

  <Project/>
  <Footer />

    </div>
  );
}

export default App;
