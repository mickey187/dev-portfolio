import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import NavBar from "../Navbar/NavBar";
import About from "../../pages/About";
import Project from "../../pages/Project";
import Contact from "../../pages/Contact";
import Skills from "../../pages/Skills";
import Blog from "../../pages/Blog";
import LandingPage from "../../pages/LandingPage";

const ScrollToSection = () => {
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      landingRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/projects") {
      projectRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/skills") {
      skillsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/blog") {
      blogRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (location.pathname === "/contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
    <div className="bg-[#F5F5F5]">
      <NavBar />
      <div ref={landingRef}>
        <LandingPage />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectRef}>
        <Project />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>  
    </div>
      
    </>
  );
};

export default ScrollToSection;
