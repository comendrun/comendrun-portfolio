import React, { useState } from "react";

import { images } from "../../constants";

import { HiMenuAlt4, HiX } from "react-icons/hi";

import { motion } from "framer-motion";

import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        {/* <img src={images.logo} alt="logo" /> */}
        <Link className="logo-link" to="/">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            comendrun
          </motion.h1>
        </Link>
      </div>
      <ul className="app__navbar-links">
        {["home", "work", "skills", "about", "contact"].map((item) => {
          return (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          );
        })}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "contact", "skills"].map((item) => {
                return (
                  <li key={item}>
                    <a onClick={() => setToggle(false)} href={`#${item}`}>
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>

      <div className="app__navbar-blog">
        <a
          href="https://blog.comendrun.com"
          target="_blank"
          rel="noreferrer"
          // className="app__navbar-blog"
        >
          My Blog
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
