import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      {/* <!-- replace with your own email address --> */}
      <a href="mailto:info@comendrun.com" className="footer__link">
        info@comendrun.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noreferrer"
            className="social-list__link"
            href="https://www.frontendmentor.io/profile/comendrun"
          >
            <i className="">FM</i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noreferrer"
            className="social-list__link"
            href="https://www.linkedin.com/in/comendrun/"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noreferrer"
            className="social-list__link"
            href="https://twitter.com/comendrun"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            target="_blank"
            rel="noreferrer"
            className="social-list__link"
            href="https://github.com/comendrun"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
      {/* <div className="logo bottom-logo">
        <a title="Go to TOP" href="#header">
          <i className="fa-solid fa-terminal"></i>comendrun -m "Kamran"
        </a>
      </div> */}
    </footer>
  );
}
