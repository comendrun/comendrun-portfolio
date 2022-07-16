import React from "react";
import comendrun2 from "../Assets/General Pictures/comendrun2.jpg";

export default function About() {
  return (
    <section className="about-me" id="about">
      <h2 className="section__title section__title--about">Who I am</h2>
      <p className="section__subtitle section__subtitle--about">
        Frontend Developer based in Germany
      </p>

      <div className="about-me__body">
        <p>
          I'm a self-taught Frontend Web Developer & I enjoy learning and
          coding. I have several personal projects and mostly spend my time
          learning new technologies or developing my current stack. I strongly
          believe in my abilities and I'm eager to learn more and more every
          day.
        </p>
        <p>
          After several years of experience as a Dental Technician- while I
          gained valuable skills- I'm finally about to make a big change in my
          life and change careers. It's a big step for me but a small one
          towards a new life full of programming.
        </p>
        <p>
          I am interested in working with teams that value Respect, humility,
          and also Collective growth & Open to remote positions, as well as
          on-site positions in München, Ingolstadt, or Nürnberg ( Germany ).
        </p>
      </div>

      <img
        src={comendrun2}
        alt="Kamran looking away"
        className="about-me__img"
      />
    </section>
  );
}
