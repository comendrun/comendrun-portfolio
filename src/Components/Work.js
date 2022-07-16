import React from "react";
import Projects from "./Projects";

export default function Work() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my range of work
      </p>
      <Projects />
    </section>
  );
}

// icons:
// js: <i className='fa-brands fa-js'></i>

// css: <i className='fa-brands fa-css3-alt'></i>

// html: <i className='fa-brands fa-html5'></i>

// reactjs: <i className='fa-brands fa-react'></i>

// sass: <i className='fa-brands fa-sass'></i>

// mobile icon: <i className='fa-solid fa-mobile-screen-button'></i>

// laptop icon: <i className='fa-solid fa-laptop'></i>

// github code branch: <i className='fa-solid fa-code-branch'></i>
