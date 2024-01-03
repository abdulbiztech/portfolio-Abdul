import React from "react";
import { Link } from "react-router-dom";
import {
  FaRegEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  const pageStart = () => {
    window.scrollTo(1, 1);
  };

  return (
    <footer className="section footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-lg-6 col-sm-12">
            <div className="head-text">
              {/* <h5 className="sub-heading mb-1">Ready To Do This</h5> */}
              <h2 className="heading mb-3">
                Let's <span>Talk & Work</span> Together
              </h2>
              <Link
                to="/contact"
                onClick={pageStart}
                type="button"
                className="button-arrow"
              >
                <span>Contact</span>
                <span className="icon">
                  <FaEnvelopeOpen />
                </span>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 col-lg-6 col-sm-12">
            <div className="text">
              <h5>Let's Talk</h5>
              <div className="row mb-2">
                <div className="col-2">
                  <div className="icon">
                    <FaRegEnvelope className="text-primary" />
                  </div>
                </div>
                <div className="col-10 d-flex align-items-center">
                  <p>
                    <a
                      href="mailto: abdulkarims582@gmail.com"
                      className="text-link"
                    >
                      abdulkarims582@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="social-icons">
                {/* <a href="#">
                  <FaFacebookF />
                </a> */}
                <Link
                  to="https://www.instagram.com/abdulkarims581/"
                  target="_blank"
                >
                  <FaInstagram />
                </Link>
                <Link to="https://github.com/abdulbiztech/" target="_blank">
                  <FiGithub />
                </Link>
                <Link
                  to="https://www.linkedin.com/in/abdulkarim-shaikh/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
              </div>
              <p className="mt-5 text-light-alt">©2023. Abdulkarim Shaikh</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
