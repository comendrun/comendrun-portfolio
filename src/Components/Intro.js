import React from "react";
import comendrun from "../Assets/General Pictures/comendrun.jpg";

export default function Intro() {
  return (
    <section className="intro" id="home">
      <h1 className="section__title section__title--intro">
        Hi, I am <strong>Kamran Rouhani</strong>
      </h1>
      <p className="section__subtitle section__subtitle--intro">
        Frontend Web Developer
      </p>
      <img src={comendrun} alt="Kamran Rouhani" className="intro__img" />
    </section>
  );
}
