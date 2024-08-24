import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the hamburger menu

const NavBar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        className={`flex flex-row justify-between px-4 py-4 lg:px-10 lg:py-4 bg-[#F5F5F5] fixed top-0 w-full transition-all duration-300 z-50 ${
          isSticky ? "bg-white shadow-md" : "bg-[#F5F5F5]"
        }`}
      >
        <Link to="/" className="font-gugi lg:text-3xl">
          Michias Hailu
        </Link>

        {/* Hamburger Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsSidebarOpen(true)} className="text-2xl">
            <FaBars />
          </button>
        </div>

        {/* Sidebar for smaller screens */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 lg:hidden transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl">
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col items-center mt-10 space-y-6">
            <Link to="/" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>Home</Link>
            <Link to="/about" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>About</Link>
            <Link to="/projects" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>Projects</Link>
            <Link to="/skills" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>Skills</Link>
            <Link to="/blog" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-white text-lg" onClick={() => setIsSidebarOpen(false)}>Contact</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:flex-row space-x-4 font-roboto">
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
