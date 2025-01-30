import React, { useEffect, useRef } from "react";
import "../Myskill/skils.css";

const Skills = () => {
  const skillRefs = useRef([]);

  // Animation for skill bars
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillLevel = entry.target;
            skillLevel.style.width = skillLevel.dataset.level;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((skill) => observer.observe(skill));

    return () => {
      skillRefs.current.forEach((skill) => observer.unobserve(skill));
    };
  }, []);

  // Skill data
  const frontEnd = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "75%" }
  ];
  
  const library = [
    { name: "Express", level: "60%" },
    { name: "React", level: "60%" },
    { name: "Bootstrap", level: "70%" }
  ];
  
  const technology = [
    { name: "Visual Studio Code", level: "75%" },
    { name: "Postman", level: "70%" }
  ];
  
  const back = [
    { name: "Node.js", level: "65%" },
    { name: "MongoDB", level: "70%" }
  ];

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
        <div className="Skills_skils">
          {/* Front End Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Front End
            </button>
            <ul className="dropdown-menu">
              <li className="skills-section">
                <div className="skills-container">
                  {frontEnd.map((skill, index) => (
                    <div className="skill" key={index}>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          data-level={skill.level}
                          ref={(el) => (skillRefs.current[index] = el)}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Back End Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Back End
            </button>
            <ul className="dropdown-menu">
              <li className="skills-section">
                <div className="skills-container">
                  {back.map((skill, index) => (
                    <div className="skill" key={index}>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          data-level={skill.level}
                          ref={(el) => (skillRefs.current[index + frontEnd.length] = el)} // Adjusted index
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Library Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Library
            </button>
            <ul className="dropdown-menu">
              <li className="skills-section">
                <div className="skills-container">
                  {library.map((skill, index) => (
                    <div className="skill" key={index}>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          data-level={skill.level}
                          ref={(el) => (skillRefs.current[index + frontEnd.length + back.length] = el)} // Adjusted index
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>

          {/* Technologies Dropdown */}
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Technologies
            </button>
            <ul className="dropdown-menu">
              <li className="skills-section">
                <div className="skills-container">
                  {technology.map((skill, index) => (
                    <div className="skill" key={index}>
                      <div className="skill-name">{skill.name}</div>
                      <div className="skill-bar">
                        <div
                          className="skill-level"
                          data-level={skill.level}
                          ref={(el) => (skillRefs.current[index + frontEnd.length + back.length + library.length] = el)} // Adjusted index
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;