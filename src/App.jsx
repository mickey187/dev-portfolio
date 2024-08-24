import React, { useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import LandingPage from "./pages/LandingPage";
import ScrollToSection from "./components/ScrollToSection/ScrollToSection";
import Footer from "./pages/Footer";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ScrollToSection />} />
          <Route path="/about" element={<ScrollToSection />} />
          <Route path="/projects" element={<ScrollToSection />} />
          <Route path="/skills" element={<ScrollToSection />} />
          <Route path="/blog" element={<ScrollToSection />} />
          <Route path="/contact" element={<ScrollToSection />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
