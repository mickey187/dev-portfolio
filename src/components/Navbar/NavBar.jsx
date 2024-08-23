import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";

const NavBar = () => {
  const [isSticky, setIsSticky] = useState();
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={`flex flex-row justify-between px-10 py-4 bg-[#F5F5F5] fixed top-0 w-full transition-all duration-300 z-50 ${
          isSticky ? "bg-white shadow-md" : "bg-[#F5F5F5]"
        }`}
      >
        <Link to="/" className="font-gugi lg:text-3xl">Michias Hailu</Link>

        <div className="flex flex-row space-x-4 font-roboto ">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>

      </nav>
      
    </>
  );
};

export default NavBar;
