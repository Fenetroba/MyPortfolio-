import React from "react";
import "../Myproject/project.css";
import project1 from "../Asset/smart.jpeg"
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Project = () => {
  return (
    <div className="Projects" id="Projects">
      <h1 className="projectsheader">My RealWorld Projects</h1>
      <div className="Projectcard">
      <div class="card">
        <div class="border"></div>
        <div class="content">
         
          <span class="logo-bottom-text">Ecommerce</span>
        </div>
        <span class="bottom-text">
          <a href="https://github.com/Fenetroba/my-Portfolio">
            <FaGithub style={{ fontSize: "20" }} />
          </a>
          <a href="https://www.linkedin.com/in/fenet-roba/">
            <FaLinkedin style={{ fontSize: "20" }} />
          </a>
        </span>
      </div>
      <div class="card">
        <div class="border"></div>
        <div class="content">

          <span class="logo-bottom-text">uiverse.io</span>
        </div>
        <span class="bottom-text">
          <a href="https://github.com/Fenetroba/my-Portfolio">
            <FaGithub style={{ fontSize: "20" }} />
          </a>
          <a href="https://www.linkedin.com/in/fenet-roba/">
            <FaLinkedin style={{ fontSize: "20" }} />
          </a>
        </span>
      </div>
      <div class="card">
        <div class="border"></div>
        <div class="content">
          <span class="logo-bottom-text">uiverse.io</span>
        </div>
        <span class="bottom-text">
          <a href="https://github.com/Fenetroba/my-Portfolio">
            <FaGithub style={{ fontSize: "20" }} />
          </a>
          <a href="https://www.linkedin.com/in/fenet-roba/">
            <FaLinkedin style={{ fontSize: "20" }} />
          </a>
        </span>
      </div>
      </div>
      
    </div>
  );
};

export default Project;
