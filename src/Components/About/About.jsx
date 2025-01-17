import React from "react";
import "../About/About.css";
import smart from '../Asset/smart.jpeg'
import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiDatabase2Line } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
const About = () => {
  return (
    <div className="about">
      <div className="ABout_contener_left">
        <h1>About Me</h1>
        <p>
          I’m a passionate <span>MERN stack developer</span> who loves working
          with MongoDB, Express.js, React.js, and Node.js. Building dynamic and
          responsive web applications is what I enjoy most, as it allows me to
          create seamless user experiences. With a solid background in
          JavaScript and modern web technologies, I thrive on tackling complex
          challenges and am always eager to learn new things to improve my
          skills. I’m dedicated to writing high-quality code and collaborating
          with my team to bring innovative ideas to life
        </p>
      </div>
      <div className="ABout_contener_right" id="About">
        <h1 className="imyIdentity"> Smart Worker GreterThan Hard Worker</h1>
        <img src={smart} alt="" />

        <div className="magicpattern">
          <span className="mongoicon">
            <SiMongodb />
          </span>
          <span className="expressIcon">
            <SiExpress />
          </span>
          <span className="reactIcon">
            <FaReact />
          </span>
          <span className="nodeIcon">
            <FaNodeJs />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
