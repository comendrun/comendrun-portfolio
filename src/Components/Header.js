import React, { useState } from "react";

export default function Header({ darkModeOnClick }) {
  const [isNavbarOn, setIsNavbarOn] = useState(false);

  return (
    <header id="header">
      <div
        onClick={() => {
          setIsNavbarOn((preValue) => !preValue);
        }}
        className={isNavbarOn ? "overlay" : "hidden"}
      ></div>
      {/* <div className="logo"> */}
        <a className="logo" href="/">
          <i className="fa-solid fa-terminal"></i>comendrun -m "Kamran"
        </a>
      {/* </div> */}
      <button
        onClick={() => {
          setIsNavbarOn((preValue) => !preValue);
        }}
        className="nav-toggle "
        aria-label="toggle navigation"
      >
        <span
          className={`hamburger ${isNavbarOn ? "hamburger-active" : ""}`}
        ></span>
      </button>
      <nav className={`nav ${!isNavbarOn ? "open" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">
              My Services
            </a>
          </li>
          <li className="nav__item">
            <a href="/#about" className="nav__link">
              About me
            </a>
          </li>
          <li className="nav__item">
            <a href="/#work" className="nav__link">
              My Work
            </a>
          </li>
          <li className="nav__item">
            <a href="#footer" className="nav__link">
              Reach out to me
            </a>
          </li>
        </ul>
        <div className="dark-mode-container">
          <i className="fa-solid fa-sun"></i>
          <div onClick={darkModeOnClick} className="dark-mode-button">
            <div className="dark-mode-button-toggle"></div>
          </div>
          <i className="fa-solid fa-moon"></i>
        </div>
      </nav>
    </header>
  );
}
