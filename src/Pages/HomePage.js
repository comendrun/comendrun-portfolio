import { useState } from "react";
import About from "../Components/About";
import Intro from "../Components/Intro";
import Services from "../Components/Services";
import Work from "../Components/Work";
import { BrowserRouter,  Route } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="home-page">
      <BrowserRouter>
        <Route path="/">
          <Intro />
          <Services />
          <About />
          <Work />
        </Route>
      </BrowserRouter>
    </div>
  );
}
