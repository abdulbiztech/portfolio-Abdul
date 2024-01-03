import React from "react";
import { motion } from "framer-motion";
import { heroImage, skewImage } from "../../constants/images";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image">
        <img src={heroImage} alt="Main Hero" />
      </div>
      <motion.div
        className="flip-animate"
        animate={{ x: 0, opacity: 0.6 }}
        initial={{ x: 80, opacity: 0 }}
        transition={{ type: "tween", duration: 1, delay: 1 }}
      >
        <img src={skewImage} alt="Skew Pattern" />
      </motion.div>
      <div className="text">
        <motion.h5
          className="sub-heading"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 2 }}
        >
          Hello I am <span></span>
        </motion.h5>
        <motion.h2
          className="heading"
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -80, opacity: 0 }}
          transition={{ type: "tween", duration: 1, delay: 3 }}
        >
          {" "}
          <span>Abdul Karim Shaikh Full Stack Developer</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default Hero;
