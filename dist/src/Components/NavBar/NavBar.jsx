import React, { useEffect, useState } from "react";
import "./navBar.css"; // Make sure to create this CSS file
import {FaMoon}from 'react-icons/fa'
import {RiMenu3Line}from 'react-icons/ri'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //this code wants to when the windows scrolles change the color
  window.addEventListener("scroll", function () {
    const tope = document.getElementById("toper");

    tope.classList.toggle("TopBackGround", window.scrollY > 0);
  });


  const darkColore = () => {
    document.querySelector("body").setAttribute("BackGroundColor", "balck");
  };
  const LightColore = () => {
    document.querySelector("body").setAttribute("BackGroundColor", "Light");
  };

  const changeColor = () => {
    let Body = document.querySelector("body").getAttribute("BackGroundColor");

    if (Body === "Light") {
      darkColore();
    } else {
      LightColore();
     
      
     
    }
  };
  


  

   
  return (
    <nav className="navbar" id="toper">
      <div className="logo">Fena </div>
      <div className={`nav-links ${isOpen ? "active" : ""}`} >
        <ul>
          <li>
            <a href="#About">About Me</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Contact">Contact Me</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          
       
        </ul>
 
      
      </div>
      <div className="britness">
  
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <FaMoon
          style={{ color: "#fff" }}
          className="body__britness"
          onClick={changeColor}
        />
            
            
      </div>
    </nav>
  );
};

export default Navbar;