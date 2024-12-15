import React, { useState, useEffect, useRef } from "react";
import { IoMenuSharp } from "react-icons/io5";
import logo from "../assets/logo.png";

function Navbar({ isAuthenticated, user, logout, loginWithPopup }) {
  const [exploreDropdown, setExploreDropdown] = useState(false);
  const [learningDropdown, setLearningDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const exploreRef = useRef(null);
  const learningRef = useRef(null);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "explore") {
      setExploreDropdown(!exploreDropdown);
    } else if (dropdown === "learning") {
      setLearningDropdown(!learningDropdown);
    }
  };

  const handleClickOutside = (event) => {
    if (
      exploreRef.current && !exploreRef.current.contains(event.target)
    ) {
      setExploreDropdown(false);
    }
    if (
      learningRef.current && !learningRef.current.contains(event.target)
    ) {
      setLearningDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`min-w-screen-2xl z-[999] absolute ${
        scrolled ? "bg-[#1f1f1f]/80 shadow-md" : "mt-4 sm:mt-2"
      } ml-5 sm:ml-12  transition-all duration-300`}
    >
      <div className="w-[90vw] mx-auto px-5 sm:px-10 flex items-center justify-between bg-[#1f1f1f] border border-1 text-white rounded-full">
        <div className="flex items-center">
          <img src={logo} alt="DataSense Logo" className="h-8 mr-3" />
          <h1 className="text-lg font-semibold">DataSense</h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-8 text-sm">
          <a className="hover:underline cursor-pointer">Home</a>
          <div
            className="relative"
            ref={learningRef}
            onMouseEnter={() => setLearningDropdown(true)}
            onMouseLeave={() => setLearningDropdown(false)}
          >
            <a className="hover:underline cursor-pointer">Quizzes</a>
            {learningDropdown && (
              <div className="absolute bg-white text-black p-3 rounded shadow-lg z-50">
                <p className="text-sm">Quiz 1</p>
                <p className="text-sm">Quiz 2</p>
              </div>
            )}
          </div>
          <div
            className="relative"
            ref={exploreRef}
            onMouseEnter={() => setExploreDropdown(true)}
            onMouseLeave={() => setExploreDropdown(false)}
          >
            <a className="hover:underline cursor-pointer">Practice questions</a>
            {exploreDropdown && (
              <div className="absolute bg-white text-black p-3 rounded shadow-lg">
                <p className="text-sm">Question Set 1</p>
                <p className="text-sm">Question Set 2</p>
              </div>
            )}
          </div>
          <a className="hover:underline cursor-pointer">Testimonials</a>
          <a className="hover:underline cursor-pointer">Contact Us</a>
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-5">
          <a className="hidden sm:block text-sm hover:underline">Log in</a>
          <button className="hidden sm:block bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200">
            Sign up
          </button>
          <span className="sm:hidden">
            <IoMenuSharp onClick={toggleMenu} />
          </span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#1f1f1f] border border-1 text-white rounded-lg mt-2 p-5">
          <a className="block py-2 hover:underline">Home</a>
          <div
            className="relative py-2"
            onClick={() => toggleDropdown("learning")}
          >
            <a className="hover:underline cursor-pointer">Quizzes</a>
            {learningDropdown && (
              <div className="absolute bg-white text-black p-3 rounded shadow-lg z-50">
                <p className="text-sm">Quiz 1</p>
                <p className="text-sm">Quiz 2</p>
              </div>
            )}
          </div>
          <div
            className="relative py-2"
            onClick={() => toggleDropdown("explore")}
          >
            <a className="hover:underline cursor-pointer">Practice questions</a>
            {exploreDropdown && (
              <div className="absolute bg-white text-black p-3 rounded shadow-lg">
                <p className="text-sm">Question Set 1</p>
                <p className="text-sm">Question Set 2</p>
              </div>
            )}
          </div>
          <a className="block py-2 hover:underline">Testimonials</a>
          <a className="block py-2 hover:underline">Contact Us</a>
          <a className="block py-2 hover:underline">Log in</a>
          <button className="w-full bg-white text-black px-4 py-2 mt-2 rounded-full text-sm hover:bg-gray-200">
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
