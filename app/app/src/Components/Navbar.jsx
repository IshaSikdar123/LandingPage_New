import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { Power4 } from "gsap/all";
import logo from "../assets/logo.png";

function Navbar({ isAuthenticated, user, logout, loginWithPopup }) {
  const [exploreDropdown, setExploreDropdown] = useState(false);
  const [learningDropdown, setLearningDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-w-screen-2xl z-[999] absolute ${scrolled ? "bg-[#1f1f1f]/80 shadow-md" : "mt-4 sm:mt-2"} ml-5 sm:ml-12 flex items-center justify-between transition-all duration-300`}>
      <div className="w-[90vw] mx-auto px-5 sm:px-10 flex items-center justify-between bg-[#1f1f1f] border border-1 text-white rounded-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="flex items-center"
        >
          <img src={logo} alt="DataSense Logo" className="h-8 mr-3" />
          <h1 className="text-lg font-semibold">DataSense</h1>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="hidden sm:flex gap-8 text-sm"
        >
          <motion.a whileHover={{ scale: 1.1 }} className="hover:underline cursor-pointer">
            Home
          </motion.a>
          <div className="relative">
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="hover:underline cursor-pointer"
              onMouseEnter={() => setLearningDropdown(true)}
              onMouseLeave={() => setLearningDropdown(false)}
            >
              Quizzes
            </motion.a>
            {learningDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-white text-black p-3 rounded shadow-lg"
              >
                <p className="text-sm">Quiz 1</p>
                <p className="text-sm">Quiz 2</p>
              </motion.div>
            )}
          </div>
          <div className="relative">
            <motion.a
              whileHover={{ scale: 1.1 }}
              className="hover:underline cursor-pointer"
              onMouseEnter={() => setExploreDropdown(true)}
              onMouseLeave={() => setExploreDropdown(false)}
            >
              Practice questions
            </motion.a>
            {exploreDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute bg-white text-black p-3 rounded shadow-lg"
              >
                <p className="text-sm">Question Set 1</p>
                <p className="text-sm">Question Set 2</p>
              </motion.div>
            )}
          </div>
          <motion.a whileHover={{ scale: 1.1 }} className="hover:underline cursor-pointer">
            Testimonials
          </motion.a>
          <motion.a whileHover={{ scale: 1.1 }} className="hover:underline cursor-pointer">
            Contact Us
          </motion.a>
        </motion.div>

        {/* Desktop Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="flex items-center gap-5"
        >
          <motion.a whileHover={{ scale: 1.1 }} className="hidden sm:block text-sm hover:underline">
            Log in
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="hidden sm:block bg-white text-black px-4 py-2 rounded-full text-sm hover:bg-gray-200"
          >
            Sign up
          </motion.button>
          <span className="sm:hidden">
            <IoMenuSharp onClick={toggleMenu} />
          </span>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ ease: Power4.easeInOut, duration: 0.7 }}
          className="sm:hidden bg-[#1f1f1f] border border-1 text-white rounded-lg mt-2 p-5"
        >
          <motion.a whileHover={{ scale: 1.05 }} className="block py-2 hover:underline">
            Home
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} className="block py-2 hover:underline">
            Quizzes
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} className="block py-2 hover:underline">
            Practice questions
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} className="block py-2 hover:underline">
            Testimonials
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} className="block py-2 hover:underline">
            Contact Us
          </motion.a>
          <motion.a whileHover={{ scale: 1.05 }} className="block py-2 hover:underline">
            Log in
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="w-full bg-white text-black px-4 py-2 mt-2 rounded-full text-sm hover:bg-gray-200"
          >
            Sign up
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}

export default Navbar;
