import React, { useEffect, useState } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Project from "../../Components/Project/Project";
import { Work } from "../../container";
import { AppWrap, MotionWrap } from "../../wrapper";

import "./ProjectsPage.scss";

const ProjectsPage = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/work/:title" element={<Project />} />
      </Routes>
    </>
  );
};

export default AppWrap(
  MotionWrap(ProjectsPage, "app__works"),
  "work",
  "app__whitebg"
);
