import { useState } from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Pages/HomePage";
import ProjectPage from "./Pages/Projects/ProjectPage";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={`app ${darkMode && "dark"}`}>
      <BrowserRouter>
        <Header darkModeOnClick={() => setDarkMode((preValue) => !preValue)} />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/projects">
            <ProjectPage />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
