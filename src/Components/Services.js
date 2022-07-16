import React from "react";

export default function Services() {
  return (
    <section className="my-services" id="services">
      <h2 className="section__title section__title--services">What I do</h2>
      <div className="services">
        <div className="service">
          <h3>Frontend Development</h3>
          <p>
          I have experience working with different methods of frontend development, and I especially enjoy working with the React JS library.
          </p>
        </div>
        {/* <!-- / service --> */}

        <div className="service">
          <h3>Learn everyday</h3>
          <p>
            Any type of work environment or any new challenge is exciting for
            me. I enjoy learning new technologies and also improve my current
            knowledge with new challenges.
          </p>
        </div>
        {/* <!-- / service --> */}

        <div className="service">
          <h3>Technical Skills</h3>
          <p>
            I have a good understanding of the main tools of Frontend
            Development and I thrive on learning every day and in every possible
            way.
          </p>
        </div>
        {/* <!-- / service --> */}
      </div>
      {/* <!-- / services --> */}

      <div>
        <ul className="tech-skills">
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>API</li>
          <li>Flex-Box</li>
          <li>CSS-Grid</li>
          <li>SASS</li>
          <li>Responsive Design</li>
          <li>Mobile-first Design</li>
          <li>CSS Custom Properties</li>
          <li>JSON</li>
          <li>AJAX</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
        </ul>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}
