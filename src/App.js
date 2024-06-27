import "./app.scss";

import { About, Header, Footer, Skills } from "./container";

import { BrowserRouter, HashRouter } from "react-router-dom";

import { Navbar } from "./Components";
import ProjectsPage from "./Pages/ProjectsPage/ProjectsPage";

import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="app" id={theme}>
      <HashRouter>
        <Navbar />
        <Header />
        <ProjectsPage />
        <Skills />
        <About />
        {/* <Testimonials /> */}
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
