import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import "./About.scss";

import { images } from "../../constants";

import { urlFor, client } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type== "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  
  return (
    <>
      <h2 className="head-text">
        From being a <span>Dental Technician</span> <br /> to become a{" "}
        <span>Software Developer</span>
      </h2>
      <h3>Would you like to know more about me?</h3>
      <p className="p-text">Here are some of my biggest strengths:</p>

      <div className="app__profiles">
        {abouts.map((about, index) => {
          return (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} className="" />
              <h2 className="bold-text" style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
