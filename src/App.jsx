import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion"; // Import Framer Motion
import About from "./Components/About/About";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Project from "./Components/Myproject/Project";
import Skills from "./Components/Myskill/Skills";
import Navbar from "./Components/NavBar/NavBar";
import Services from "./Components/services/Services";
import './App.css'
import Contact from "./Components/ContactMe/Contact";
function App() {
  // Create refs and visibility trackers for all sections
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const footerRef = useRef(null);

  const isAboutInView = useInView(aboutRef, { once: false, margin: "-100px" });
  const isSkillsInView = useInView(skillsRef, { once: false, margin: "-100px" });
  const isProjectInView = useInView(projectRef, { once: false, margin: "-100px" });
  const isFooterInView = useInView(footerRef, { once: false, margin: "-100px" });

  return (
    <div className="about-container">
      <Navbar />
      <Header />

      {/* About Section Animation */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, x: -100 }}
        animate={{ 
          opacity: isAboutInView ? 1 : 0,
          x: isAboutInView ? 0 : -100 
        }}
        transition={{ duration: 2 }}
      >
        <About />
      </motion.div>

      {/* Skills Section Animation */}
      <motion.div
        ref={skillsRef}
        initial={{ opacity: 0, x: 100 }} // Animate from right
        animate={{ 
          opacity: isSkillsInView ? 1 : 0,
          x: isSkillsInView ? 0 : 100 
        }}
        transition={{ duration: 2 }}
      >
        <Skills />
      </motion.div>

      <Services/>
      {/* Project Section Animation */}
      <motion.div
        ref={projectRef}
        initial={{ opacity: 0, y: 100 }} // Animate from bottom
        animate={{ 
          opacity: isProjectInView ? 1 : 0,
          y: isProjectInView ? 0 : 100 
        }}
        transition={{ duration: 2 }}
      >
        <Project />
      </motion.div>
      <Contact/>

      {/* Footer Section Animation */}
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isFooterInView ? 1 : 0,
          scale: isFooterInView ? 1 : 0.8 
        }}
        transition={{ duration: 2 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}

export default App;