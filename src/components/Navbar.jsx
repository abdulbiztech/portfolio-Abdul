import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo } from "../constants/images";

export default function Navbar() {
  const [navToggle, setNavToggle] = useState(false);

  const togglerFunction = () => {
    setNavToggle(!navToggle);
  };

  const pageStart = () => {
    window.scrollTo(1, 1);
  };

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
            <NavLink to="/" className="nav-link" exact>
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/work" className="nav-link">
              Work
            </NavLink>
            {/* <NavLink to="/post" className="nav-link">
              Blog Post
            </NavLink> */}
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
            <Link to="/contact" onClick={pageStart} className="button ms-lg-2">
              Let's Talk
            </Link>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
