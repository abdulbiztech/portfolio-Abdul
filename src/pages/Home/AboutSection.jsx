import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import { aboutImage } from "../../constants/images";

const AboutSection = () => {
  // const [move, setMove] = useState(false);
  const pageStart = () => {
    window.scrollTo(1, 1);
  };

  return (
    <section className="section about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
            <motion.div className="text" data-aos="fade-right">
              <h5 className="sub-heading mb-1">
                About Me <span></span>
              </h5>
              <h2 className="heading mb-1">
                Full Stack Developer <span>Based In Mumbai</span>
              </h2>
              <p className="mb-1">
                👋 Hello! I'm Abdul, a passionate Full Stack Developer with 2
                years of hands-on experience in crafting and delivering
                innovative web solutions. My journey in the world of coding
                began with a strong curiosity for both frontend and backend
                technologies, and it has evolved into a rewarding career.
              </p>
              <p className="mb-1">
                🌟 As I continue on this journey, I'm excited to connect with
                fellow developers, tech enthusiasts, and professionals who share
                the same passion for innovation and problem-solving. Let's
                explore new possibilities and make the digital world more
                dynamic together!"
              </p>
              {/* <p className="mb-2">
                I also like to listen to songs and watch videos on YouTube.
              </p> */}
              <Link
                to="/about"
                onClick={pageStart}
                type="button"
                className="button-arrow"
              >
                <span>Read More</span>
                <span className="icon">
                  <FaChevronRight />
                </span>
              </Link>
            </motion.div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="about-image d-flex align-items-center justify-content-center">
              {/* <motion.div
                className="bg-1"
                // animate={{ x: 0, skew: -30 }}
                initial={{ x: 80, skew: -30, opacity: 0 }}
                whileInView={{ x: 0, skew: -30, opacity: 1 }}
                transition={{ duration: 0.7, delay: 1.4 }}
              ></motion.div> */}
              {/* <motion.div
                className="bg-2"
                // animate={{ x: 0, skew: -30 }}
                initial={{ x: -80, skew: -30, opacity: 0 }}
                whileInView={{ x: 0, skew: -30, opacity: 1 }}
                transition={{ duration: 0.7, delay: 2.1 }}
              ></motion.div> */}
              <motion.div
                className="image"
                // animate={{ scale: 1 }}
                // initial={{ scale: 0, opacity: 0 }}
                // whileInView={{ scale: 1, opacity: 1 }}
                // transition={{ duration: 0.7, delay: 0.7 }}
              >
                <img src={aboutImage} alt="Me Manisha" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
