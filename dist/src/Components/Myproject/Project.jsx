import React from "react";
import "./project.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Project = () => {
  return (
    <div className="Projects" id="Projects">
      <h1 className="projectsheader">My Real World Projects</h1>
      <div className="Projectcard">
        <div className="card">
          <div className="border"></div>
          <div className="content">
            <span className="logo-bottom-text">
              <a href="https://ayu-chiffons.onrender.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/455/455691.png"
                  alt="Link"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </span>
          </div>
          <span className="bottom-text">
            <a href="https://github.com/Fenetroba/my-Portfolio">
              <FaGithub style={{ fontSize: "20" }} />
            </a>
            <a href="https://www.linkedin.com/in/fenet-roba/">
              <FaLinkedin style={{ fontSize: "20" }} />
            </a>
          </span>
        </div>
        <div className="card">
          <div className="border"></div>
          <div className="content">
            <span className="logo-bottom-text">
              <a href="https://ecommerceproject-1-paae.onrender.com" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/455/455691.png"
                  alt="Link"
                  style={{ width: "30px", height: "30px" }}
                />
              </a>
            </span>
          </div>
          <span className="bottom-text">
            <a href="https://github.com/Fenetroba/my-Portfolio">
              <FaGithub style={{ fontSize: "20" }} />
            </a>
            <a href="https://www.linkedin.com/in/fenet-roba/">
              <FaLinkedin style={{ fontSize: "20" }} />
            </a>
          </span>
        </div>
        <div className="card">
          <div className="border"></div>
          <div className="content">
            <span className="logo-bottom-text">On A Way</span>
          </div>
          <span className="bottom-text">
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