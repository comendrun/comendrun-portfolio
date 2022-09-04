import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.scss";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const experienceQuery = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    const coursesQuery = '*[_type == "courses"]';

    client.fetch(experienceQuery).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

    client.fetch(coursesQuery).then((data) => {
      setCourses(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Skills and Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills?.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`${index + "-" + skill.name}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="app__skills-exp-courses-container">
          {/* exp and courses starts here ==> */}
          <motion.div className="app__skills-exp">
            <h2 className="heading">Experiences:</h2>
            {experience?.map((experience, index) => {
              return (
                <motion.div
                  className="app__skills-exp-item"
                  key={`${experience.year}`}
                >
                  <div className="app__skills-exp-year">
                    <p className="bold-text">{experience.year}</p>
                  </div>
                  <motion.div className="app__skills-exp-works">
                    {experience.works.map((work, index) => (
                      <>
                        <motion.div
                          whileInView={{ opacity: [0, 1] }}
                          transition={{ duration: 0.5 }}
                          className="app__skills-exp-work"
                          data-tip
                          data-for={work.name}
                          key={work.desc + index}
                        >
                          <h4 className="bold-text ">{work.name}</h4>
                          <p className="p-text">{work.company}</p>
                        </motion.div>

                        <ReactTooltip
                          id={work.name}
                          effect="solid"
                          arrowColor="#fff"
                          className="skills-tooltip"
                        >
                          {work.desc}
                        </ReactTooltip>
                      </>
                    ))}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div className="app__skills-exp">
            <h2 className="heading">Courses:</h2>
            {courses?.map((course, index) => (
              <motion.div
                className="app__skills-exp-item"
                key={`${course.year + "-" + index + course.year + "courses"}`}
              >
                <div className="app__skills-exp-year">
                  <p className="bold-text">{course.year}</p>
                </div>
                <motion.div className="app__skills-exp-course">
                  {course.course.map((course, index) => (
                    <>
                      <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        className="app__skills-exp-work"
                        data-tip
                        data-for={course.name}
                        key={`${
                          course.name + "-" + index + "-" + course.company
                        }`}
                      >
                        <h4 className="bold-text ">{course.name}</h4>
                        <p className="p-text">{course.platform}</p>
                      </motion.div>

                      <ReactTooltip
                        id={course.name}
                        effect="solid"
                        arrowColor="#fff"
                        className="skills-tooltip"
                      >
                        {course.shortDesc}
                      </ReactTooltip>
                    </>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          {/* app__skills-exp-courses-container end ==> */}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, "app__skills"),
  "skills",
  "app__primarybg"
);
