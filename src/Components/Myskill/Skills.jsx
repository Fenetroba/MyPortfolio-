import React from "react";
import "../Myskill/skils.css";
const Skills = () => {
  return (
    <div className="about__mySkill" id="Skills">
      <div>
        <h2>MY Skill</h2>
        <p>
          I’m a smart worker who genuinely enjoys learning new things and
          tackling challenges head-on. With a creative spirit, I love finding
          innovative solutions and bringing fresh ideas to the table. My passion
          for technology keeps me curious and motivated to stay updated with the
          latest trends. My skills include:
        </p>
        <div className="about__skillwrapper">
          <div className="about__skill">
            <h3>Mongo Database</h3>
            <div className="line"></div>
          </div>
          <div className="about__skill">
            <h3>Express Js</h3>
            <div className="line"></div>
          </div>
          <div className="about__skill">
            <h3>React Js</h3>
            <div className="line"></div>
          </div>

          <div className="about__skill">
            <h3>Node Js</h3>
            <div className="line"></div>
          </div>
        </div>
      </div>
      <div className="about__exp">
        <h3>
          <span>I Am</span> SMART WORKER
        </h3>
      </div>
    </div>
  );
};

export default Skills;
