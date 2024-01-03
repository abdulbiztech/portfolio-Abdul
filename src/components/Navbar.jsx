import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { logo } from "../constants/images";
import { resume } from "../constants/files";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const togglerFunction = () => {
    setNavToggle(!navToggle);
  };
  const closeNav = () => {
    setNavToggle(false);
  };

  //   const pageStart = () => {
  //     window.scrollTo(1, 1);
  //   };

  return (
    <motion.header
      className="header"
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -100, opacity: 0 }}
      transition={{ type: "tween", duration: 1, delay: 0 }}
    >
      <div className="container">
        <nav className="navbar">
          <Link className="logo" to="/">
            <img src={logo} alt="Portfolio - Manisha Prajapati" />
          </Link>
          <button className="nav-toggle" onClick={togglerFunction}>
            {navToggle ? <FaTimes /> : <FaBars />}
          </button>
          <div
            className={navToggle ? "navbar-nav navbar-active" : "navbar-nav"}
          >
            <NavLink to="/" className="nav-link" onClick={closeNav} exact>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link" onClick={closeNav}>
              About
            </NavLink>
            <NavLink to="/work" className="nav-link" onClick={closeNav}>
              Work
            </NavLink>
            {/* <NavLink to="/post" className="nav-link" onClick={closeNav}>
              Blog Post
            </NavLink> */}
            <NavLink to="/contact" className="nav-link" onClick={closeNav}>
              Contact
            </NavLink>
            <Link
              to={resume}
              target="_blank"
              className="button ms-lg-2"
              download="Abdulkarim-Shaikh.pdf"
            >
              <FaDownload /> Resume
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
