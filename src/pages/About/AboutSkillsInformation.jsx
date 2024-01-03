import React from "react";
import { FiBook } from "react-icons/fi";
import { Link } from "react-scroll";
import {
  html,
  css,
  js,
  figma,
  python,
  django,
  bootstrap,
  react,
  sass,
  angular,
  nodejs,
  mongodb,
  typescript,
} from "../../constants/images";

const AboutSkillsInformation = () => {
  return (
    <section className="section skills-info">
      <div className="container">
        <div className="information">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="info-links">
                <li>
                  <Link
                    activeClass="active"
                    to="education"
                    spy={true}
                    className="tab-links"
                  >
                    Education
                  </Link>
                </li>
                <li>
                  <Link to="experience" spy={true} className="tab-links">
                    Experience
                  </Link>
                </li>
                <li>
                  <Link to="skills" spy={true} className="tab-links">
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12">
              <div className="about-info" id="education">
                <h2 className="heading text-primary mb-2">Education</h2>
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>2018-2022</h5>
                      <h4>
                        Bachelor of Engineering, Computer Science Engineering
                      </h4>
                      <h6>University of Mumbai</h6>
                      <p>
                        Studied Computer Science with a focus on software
                        development and algorithms. Completed coursework in data
                        structures, algorithms, software engineering principles,
                        and database management. Achieved a CGPA of 7.2
                      </p>
                    </div>
                  </div>
                </div>
                {/* <hr className="my-2" /> */}
                {/* <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>2017-2018</h5>
                      <h4>Science Stream</h4>
                      <h6>Guru Nanak Khalsa College</h6>
                      <p>
                        After completing my SSC exam I study at Guru Nanak
                        Khalsa College of Matunga and completed my HSC.
                      </p>
                    </div>
                  </div>
                </div> */}
                <hr className="my-2" />
              </div>
              <div className="about-info" id="experience">
                <h2 className="heading text-primary mb-2">Experience</h2>
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>January 2023 - Present</h5>
                      <h4>Biz Technology IT Solutions Limited</h4>
                      <p>
                        My responsibilities include collaborating with
                        cross-functional teams to understand project
                        requirements, translating design mockups into responsive
                        and interactive user interfaces, and implementing the
                        application's business logic.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
                <div className="row">
                  <div className="col-2">
                    <div className="icon">
                      <FiBook />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="info">
                      <h5>January 2022 - December 2023</h5>
                      <h4>Sankey Solutions</h4>
                      <p>
                        Working as an Angular developer. In this role, I play a
                        crucial part in designing, developing and Api
                        Integrations, and maintaining web applications using
                        Angular, a popular and powerful front-end framework.
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </div>
              <div className="about-info" id="skills">
                <h2 className="heading text-primary mb-2">Skills</h2>
                <div className="skills-logo">
                  <img src={html} alt="HTML" title="HTML" />
                  <img src={css} alt="CSS" title="CSS" />
                  <img src={js} alt="JavaScript" title="JavaScript" />
                  <img src={typescript} alt="typescript" title="TypeScript" />
                  <img src={angular} alt="Angular" title="Angular" />
                  <img src={nodejs} alt="Nodejs" title="Node js" />
                  <img src={mongodb} alt="mongodb" title="MongoDB" />
                  <img src={react} alt="React" title="React" />
                  <img src={sass} alt="SASS" title="SASS" />
                  <img src={bootstrap} alt="Boostrap" title="Boostrap" />
                  <img src={figma} alt="Figma" title="Figma" />
                  {/* <img src={python} alt="Python" title="Python" /> */}
                  {/* <img src={django} alt="Django" title="Django" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSkillsInformation;
